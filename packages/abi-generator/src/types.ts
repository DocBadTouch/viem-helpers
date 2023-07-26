export interface Arguments {
  inputpath: string;
  outputpath: string;
  genViemWrites: boolean | undefined;
  genViemReads: boolean | undefined;
}
export type AbiInput = {
  name: string;
  type: string;
  indexed?: boolean;
};
export type AbiOutput = {
  name: string;
  type: string;
};
export type AbiFunction = {
  name: string;
  inputs: AbiInput[];
  outputs: AbiOutput[];
  stateMutability: string;
  type: string;
};

export type AbiEvent = {
  name: string;
  inputs: AbiInput[];
  anonymous: boolean;
  type: string;
};
