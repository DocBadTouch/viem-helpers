import * as fs from "fs-extra";
import * as glob from "glob";
import * as path from "path";

const inputDirectory = path.resolve(process.cwd(), process.argv[2]);
const outputDirectory = path.resolve(process.cwd(), process.argv[3]);

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
    console.error(`No ABI found in ${file}`);
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
  const functionsObject: { [key: string]: any } = {};
  const functionOutputs: { [key: string]: string[] } = {};

  const eventsObject: { [key: string]: any } = {};

  abi.forEach((entry: any) => {
    if (entry.type === "function") {
      functionsObject[entry.name] = entry;
      if (entry.outputs && entry.outputs.length > 0) {
        functionOutputs[entry.name] = entry.outputs.map((output: any) => {
          if (output.type === "address") {
            return "`0x${string}`";
          } else if (output.type === "uint256") {
            return "bigint";
          } else if (output.type === "uint8") {
            return "number | bigint";
          } else if (output.type === "bool") {
            return "boolean";
          } else {
            return output.type;
          }
        });
      }
    }
  });
  abi.forEach((entry: any) => {
    if (entry.type === "event") {
      eventsObject[entry.name] = entry;
    }
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

  // output function types
  const functionTypes = Object.keys(functionsObject).map((key) => {
    const functionObject = functionsObject[key];
    const inputs = functionObject.inputs.map((input: any) => {
      if (input.type === "address") {
        return (input.name || "address") + ": `0x${string}`";
      } else if (input.type === "uint256") {
        return (input.name || "amount") + ": bigint";
      } else if (input.type === "uint8") {
        return (input.name || "amount") + ": number | bigint";
      } else if (input.type === "bool") {
        return (input.name || "bool") + ": boolean";
      } else {
        return input.name + `: ${input.type}`;
      }
    });
    const outputs = functionOutputs[key] || ["void"];
    return `export type ${key}_type = (${inputs.join(
      ", "
    )}) => Promise<${outputs.join(", ")}>;`;
  });

  // output event types
  const eventTypes = Object.keys(eventsObject).map((key) => {
    const eventObject = eventsObject[key];
    const inputs = eventObject.inputs.map((input: any) => {
      if (input.type === "address") {
        return (input.name || "address") + ": `0x${string}`";
      } else if (input.type === "uint256") {
        return (input.name || "amount") + ": bigint";
      } else if (input.type === "uint8") {
        return (input.name || "amount") + ": number | bigint";
      } else if (input.type === "bool") {
        return (input.name || "bool") + ": boolean";
      } else {
        return input.name + `: ${input.type}`;
      }
    });
    return `export type ${key}_type = (${inputs.join(", ")}) => Promise<void>;`;
  });

  // Append the functions export to the output file
  fs.writeFileSync(
    outputFileName,
    `${exportAbiString}\n\n${functionsExportString}\n\n${eventsExportString}\n\n${functionTypes.join(
      "\n"
    )}\n\n${eventTypes.join("\n")}`
  );

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
