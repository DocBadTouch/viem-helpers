export const xPTPConvertor_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_xptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_ptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_router",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_pair",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositedPTP",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "obtainedxPTP",
        "type": "uint256"
      }
    ],
    "name": "xPTPObtained",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DENOMINATOR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyThreshold",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deltaPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "obtainedxPtpAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      }
    ],
    "name": "depositFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "obtainedxPtpAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountSold",
        "type": "uint256"
      }
    ],
    "name": "estimateOutAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "estimateTotalConversion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "minimumEstimatedTotal",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getxPTPRatio",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "xPTPRatio",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxAmountToBuy",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pair",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ptp",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "router",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setBuyPercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setBuyThreshold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setDeltaPercentage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setSlippage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "slippagePct",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "xptp",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const xPTPConvertor_functions = {
  "DENOMINATOR": {
    "inputs": [],
    "name": "DENOMINATOR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "buyPercent": {
    "inputs": [],
    "name": "buyPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "buyThreshold": {
    "inputs": [],
    "name": "buyThreshold",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "deltaPercentage": {
    "inputs": [],
    "name": "deltaPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "deposit": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "obtainedxPtpAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "depositFor": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      }
    ],
    "name": "depositFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "obtainedxPtpAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "estimateOutAmount": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountSold",
        "type": "uint256"
      }
    ],
    "name": "estimateOutAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "estimateTotalConversion": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "estimateTotalConversion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "minimumEstimatedTotal",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getxPTPRatio": {
    "inputs": [],
    "name": "getxPTPRatio",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "xPTPRatio",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "maxAmountToBuy": {
    "inputs": [],
    "name": "maxAmountToBuy",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "owner": {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "pair": {
    "inputs": [],
    "name": "pair",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "ptp": {
    "inputs": [],
    "name": "ptp",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "renounceOwnership": {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "router": {
    "inputs": [],
    "name": "router",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "setBuyPercent": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setBuyPercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setBuyThreshold": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setBuyThreshold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setDeltaPercentage": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setDeltaPercentage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setSlippage": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "setSlippage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "slippagePct": {
    "inputs": [],
    "name": "slippagePct",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "transferOwnership": {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "xptp": {
    "inputs": [],
    "name": "xptp",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
} as const;

export const xPTPConvertor_events = {
  "OwnershipTransferred": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  "xPTPObtained": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositedPTP",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "obtainedxPTP",
        "type": "uint256"
      }
    ],
    "name": "xPTPObtained",
    "type": "event"
  }
} as const;

export type DENOMINATOR_type = () => Promise<bigint>;
export type buyPercent_type = () => Promise<bigint>;
export type buyThreshold_type = () => Promise<bigint>;
export type deltaPercentage_type = () => Promise<bigint>;
export type deposit_type = (_amount: bigint) => Promise<bigint>;
export type depositFor_type = (_amount: bigint, _for: `0x${string}`) => Promise<bigint>;
export type estimateOutAmount_type = (amountSold: bigint) => Promise<bigint>;
export type estimateTotalConversion_type = (_amount: bigint) => Promise<bigint>;
export type getxPTPRatio_type = () => Promise<bigint>;
export type maxAmountToBuy_type = () => Promise<bigint>;
export type owner_type = () => Promise<`0x${string}`>;
export type pair_type = () => Promise<`0x${string}`>;
export type ptp_type = () => Promise<`0x${string}`>;
export type renounceOwnership_type = () => Promise<void>;
export type router_type = () => Promise<`0x${string}`>;
export type setBuyPercent_type = (newValue: bigint) => Promise<void>;
export type setBuyThreshold_type = (newValue: bigint) => Promise<void>;
export type setDeltaPercentage_type = (newValue: bigint) => Promise<void>;
export type setSlippage_type = (newValue: bigint) => Promise<void>;
export type slippagePct_type = () => Promise<bigint>;
export type transferOwnership_type = (newOwner: `0x${string}`) => Promise<void>;
export type xptp_type = () => Promise<`0x${string}`>;

export type OwnershipTransferred_event_type = (previousOwner: `0x${string}`, newOwner: `0x${string}`) => Promise<void>;
export type xPTPObtained_event_type = (user: `0x${string}`, depositedPTP: bigint, obtainedxPTP: bigint) => Promise<void>;