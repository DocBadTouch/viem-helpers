#!/usr/bin/env node
import * as fs from "fs-extra";
import * as glob from "glob";
import * as path from "path";
import * as yarg from "yargs";
import { AbiEvent, AbiFunction, AbiInput, AbiOutput, Arguments } from "./types";
import {
  RawAbiTypeGenericNameMap,
  RawAbiTypeToTypeScriptTypeMap,
} from "./maps";

const argv = yarg
  .usage("Usage: $0 [options]")
  .option("inputpath", {
    alias: "i",
    describe: "Path to the input JSON ABI files",
    demandOption: true, // The option is required
    type: "string",
  })
  .option("outputpath", {
    alias: "o",
    describe: "Path to the output directory for TypeScript files",
    demandOption: true, // The option is required
    type: "string",
  })
  .option("genViemReads", {
    alias: "gvr",
    describe: "Generate view reads",
    demandOption: false, // The option is required
    type: "boolean",
  })
  .option("genViemWrites", {
    alias: "gvw",
    describe: "Generate view writes",
    demandOption: false, // The option is required
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv as Arguments;
const inputDirectory = argv.inputpath as string;
const outputDirectory = argv.outputpath as string;

if (!inputDirectory || !outputDirectory) {
  console.error("Please provide both input and output directories.");
  process.exit(1);
}

const fileTypes = ["json"]; // Add any other file types you want to process

console.log("Input Directory:", inputDirectory);
console.log("Output Directory:", outputDirectory);

// Create the output directory if it doesn't exist
fs.ensureDirSync(outputDirectory);

// Read the input directory and find files matching the specified file types
const files = glob.sync(
  path.join(inputDirectory, `**/*.+(${fileTypes.join("|")})`),
  { absolute: true }
);

console.log("Files:", files);

// Process each file
files.forEach((file) => {
  const fileName = path.basename(file, path.extname(file));
  const outputFileName = path.join(outputDirectory, `${fileName}.ts`);
  const content = fs.readFileSync(file, "utf8");

  // Extract the "abi" field from the JSON content
  const { abi } = JSON.parse(content);
  //catch error
  if (!abi) {
    console.error(`No ABI found in ${file} - skipping file`);
    //skip file
    return;
  }

  // Convert the export object to a formatted string
  const exportAbiString = `export const ${fileName}_ABI = ${JSON.stringify(
    abi,
    null,
    2
  )} as const;`;

  // Create a separate export object for functions based on the "type" property
  const rawAbiFunctions = abi.filter((entry: any) => entry.type === "function");
  const rawAbiEvents = abi.filter((entry: any) => entry.type === "event");
  const functionArray: AbiFunction[] = [];
  const eventArray: AbiEvent[] = [];
  const functionTypeDefs: string[] = [];
  const eventTypeDefs: string[] = [];
  const functionsObject: { [key: string]: any } = {};
  const functionOutputs: { [key: string]: string[] } = {};

  const eventsObject: { [key: string]: any } = {};
  //add a count for each entry
  rawAbiFunctions.forEach((entry: any) => {
    let func: AbiFunction = {
      name: entry.name,
      inputs: getFunctionInputs(entry.inputs),
      outputs: getOutputs(entry.outputs),
      stateMutability: entry.stateMutability,
      type: entry.type,
    };
    functionArray.push(func);
    functionsObject[entry.name] = entry;
    let inputsString = func.inputs
      .map((input) => `${input.name}: ${input.type}`)
      .join(", ");
    let outputsString =
      func.outputs.length === 0
        ? "void"
        : func.outputs.length === 1
        ? func.outputs[0].type
        : `[${func.outputs.map((output) => `${output.type}`).join(", ")}]`;

    let typeString = `export type ${entry.name}_type = (${inputsString}) => Promise<${outputsString}>;`;
    functionTypeDefs.push(typeString);
  });
  rawAbiEvents.forEach((entry: any) => {
    let func: AbiEvent = {
      name: entry.name,
      inputs: getFunctionInputs(entry.inputs),
      anonymous: entry.anonymous,
      type: entry.type,
    };
    eventArray.push(func);
    eventsObject[entry.name] = entry;
    let inputsString = func.inputs
      .map((input) => `${input.name}: ${input.type}`)
      .join(", ");

    let typeString = `export type ${entry.name}_event_type = (${inputsString}) => Promise<void>;`;
    eventTypeDefs.push(typeString);
  });

  // Convert the functions export object to a formatted string
  const functionsExportString = `export const ${fileName}_functions = ${JSON.stringify(
    functionsObject,
    null,
    2
  )} as const;`;

  const eventsExportString = `export const ${fileName}_events = ${JSON.stringify(
    eventsObject,
    null,
    2
  )} as const;`;

  // Append the functions export to the output file
  fs.writeFileSync(
    outputFileName,
    `${exportAbiString}\n\n${functionsExportString}\n\n${eventsExportString}\n\n${functionTypeDefs.join(
      "\n"
    )}\n\n${eventTypeDefs.join("\n")}`
  );
  let contractString = `export class ${fileName}Contract {
    address: ${"`0x${string}`"};
    chain: Chain;
    constructor(
      address: ${"`0x${string}`"},
      chain: Chain,
      ) {
        this.address = address;
        this.chain = chain;
      }
      `;

  if (argv.genViemReads) {
    //generate view reads
    const viewReads = functionArray
      .filter((func) => func.stateMutability === "view")
      .map((func) => {
        let inputsString = func.inputs
          .map((input) => `${input.name}: ${input.type}`)
          .join(", ");
        let outputsString =
          func.outputs.length === 0
            ? "void"
            : func.outputs.length === 1
            ? func.outputs[0].type
            : `[${func.outputs.map((output) => `${output.type}`).join(", ")}]`;
        return `export const ${func.name} = (${inputsString}): Promise<${outputsString}> => {
          //TODO: implement
        };
        `;
      });
    fs.appendFileSync(outputFileName, viewReads.join("\n"));
  }

  console.log(`Generated TypeScript constants in ${outputFileName}`);
});

// Create the index.ts file to export all constants accounting for clashing exports
const exportStatements = files.map((file) => {
  const fileName = path.basename(file, path.extname(file));
  return `export { ${fileName}_ABI } from './${fileName}';`;
});

const indexFileContent = exportStatements.join("\n");

// Write the index.ts file
fs.writeFileSync(path.join(outputDirectory, "index.ts"), indexFileContent);

console.log(`Generated index.ts file in ${outputDirectory}`);
function getFunctionInputs(inputs: any): AbiInput[] {
  if (!inputs) {
    return [];
  }
  let names: string[] = [];
  return inputs.map((input: any, index: number) => {
    let name =
      input.name || RawAbiTypeGenericNameMap.get(input.type) || `arg${index}`;
    let nameUsed = names.includes(name);
    if (nameUsed) {
      name = `${name}${index}`;
    }
    names.push(name);
    return {
      name,
      type:
        RawAbiTypeToTypeScriptTypeMap.get(input.type) ||
        `any /**${input.type}*/`,
      indexed: input.indexed,
    };
  });
}

function getOutputs(outputs: any): AbiOutput[] {
  //console.log("outputs:", outputs);
  if (!outputs || outputs.length === 0) {
    return [];
  }
  return outputs.map((output: any, index: number) => {
    if (output.type === "tuple") {
      if (output.components) {
        return {
          name: getOutputName(output, index),
          type: getTupleOutputType(output),
        };
      }
    }
    //check if tupleArray
    if (output.type === "tuple[]") {
      //console.log("tuple output:", output);
      if (output.components) {
        return {
          name: getOutputName(output, index),
          type: `(${getTupleOutputType(output)})[]`,
        };
      }
    }
    return {
      name:
        output.name ||
        RawAbiTypeGenericNameMap.get(output.type) ||
        `outArg${index}`,
      type:
        RawAbiTypeToTypeScriptTypeMap.get(output.type) ||
        `any /**${output.type}*/`,
    };
  });
}
function getTupleOutputType(output: any) {
  //console.log("components:", output.components);
  return `{
            ${output.components
              .map((component: any, index: number) => {
                return `${component.name || `arg${index}`}: ${
                  RawAbiTypeToTypeScriptTypeMap.get(component.type) ||
                  `any /**${component.type}*/`
                }`;
              })
              .join(", ")}
          } | [
            ${output.components
              .map((component: any, index: number) => {
                return `${
                  RawAbiTypeToTypeScriptTypeMap.get(component.type) ||
                  `any /**${component.type}*/`
                }`;
              })
              .join(", ")}
          ]`;
}

function getOutputName(output: any, index: number) {
  return (
    output.name || RawAbiTypeGenericNameMap.get(output.type) || `outArg${index}`
  );
}
