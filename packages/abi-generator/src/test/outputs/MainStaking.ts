export const MainStaking_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      }
    ],
    "name": "AddFee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewPtpStaked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewWithdraw",
    "type": "event"
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
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "name": "PoolAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PtpClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "callerFee",
        "type": "uint256"
      }
    ],
    "name": "PtpHarvested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "RemoveFee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "rewardToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "feeAmount",
        "type": "uint256"
      }
    ],
    "name": "RewardPaidTo",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "SetFee",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "CALLER_FEE",
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
    "name": "MAX_CALLER_FEE",
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
    "name": "MAX_FEE",
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
        "name": "_ptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_staking_ptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stakingStable",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_masterPlatypus",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_masterVtx",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_callerFee",
        "type": "uint256"
      }
    ],
    "name": "__MainStaking_init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "min",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      }
    ],
    "name": "addFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimPTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimdAndStakePTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "computeAPR",
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
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "feeInfos",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "max_value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "min_value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getDepositTokensForShares",
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getLPTokensForShares",
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
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getPoolInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lp",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "sizeLp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receipt",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "rewards_addr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "helper",
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getSharesForDepositTokens",
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
    "name": "getStakedPtp",
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
    "name": "getVePtp",
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
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isUser",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "verbose",
        "type": "bool"
      }
    ],
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "masterPlatypus",
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
    "name": "masterVtx",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "pools",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lpAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "sizeLp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiptToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "rewarder",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "helper",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lpAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "receiptName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "receiptSymbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "allocPoints",
        "type": "uint256"
      }
    ],
    "name": "registerPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "removeFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "removePool",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rewarder",
        "type": "address"
      }
    ],
    "name": "sendTokenRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "setCallerFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_computeAPR",
        "type": "address"
      }
    ],
    "name": "setComputeAPR",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "setFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_xPTP",
        "type": "address"
      }
    ],
    "name": "setXPTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakeAllPtp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "stakePTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakingStable",
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
    "name": "staking_ptp",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "tokenToAvaxPool",
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
    "name": "totalFee",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_slippage",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "xPTP",
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

export const MainStaking_functions = {
  "CALLER_FEE": {
    "inputs": [],
    "name": "CALLER_FEE",
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
  "MAX_CALLER_FEE": {
    "inputs": [],
    "name": "MAX_CALLER_FEE",
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
  "MAX_FEE": {
    "inputs": [],
    "name": "MAX_FEE",
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
  "__MainStaking_init": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_staking_ptp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stakingStable",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_masterPlatypus",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_masterVtx",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_callerFee",
        "type": "uint256"
      }
    ],
    "name": "__MainStaking_init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "addFee": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "max",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "min",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      }
    ],
    "name": "addFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "claimPTP": {
    "inputs": [],
    "name": "claimPTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "claimdAndStakePTP": {
    "inputs": [],
    "name": "claimdAndStakePTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "computeAPR": {
    "inputs": [],
    "name": "computeAPR",
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
  "deposit": {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "feeInfos": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "feeInfos",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "max_value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "min_value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getDepositTokensForShares": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getDepositTokensForShares",
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
  "getLPTokensForShares": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getLPTokensForShares",
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
  "getPoolInfo": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getPoolInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lp",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "sizeLp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receipt",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "rewards_addr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "helper",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getSharesForDepositTokens": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getSharesForDepositTokens",
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
  "getStakedPtp": {
    "inputs": [],
    "name": "getStakedPtp",
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
  "getVePtp": {
    "inputs": [],
    "name": "getVePtp",
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
  "harvest": {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isUser",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "verbose",
        "type": "bool"
      }
    ],
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "masterPlatypus": {
    "inputs": [],
    "name": "masterPlatypus",
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
  "masterVtx": {
    "inputs": [],
    "name": "masterVtx",
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
  "pools": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "pools",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lpAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "sizeLp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiptToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "rewarder",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "helper",
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
  "registerPool": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pid",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lpAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "receiptName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "receiptSymbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "allocPoints",
        "type": "uint256"
      }
    ],
    "name": "registerPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "removeFee": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "removeFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "removePool": {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "removePool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "renounceOwnership": {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "sendTokenRewards": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rewarder",
        "type": "address"
      }
    ],
    "name": "sendTokenRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setCallerFee": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "setCallerFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setComputeAPR": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_computeAPR",
        "type": "address"
      }
    ],
    "name": "setComputeAPR",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setFee": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "setFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setXPTP": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_xPTP",
        "type": "address"
      }
    ],
    "name": "setXPTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "stakeAllPtp": {
    "inputs": [],
    "name": "stakeAllPtp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "stakePTP": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "stakePTP",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "stakingStable": {
    "inputs": [],
    "name": "stakingStable",
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
  "staking_ptp": {
    "inputs": [],
    "name": "staking_ptp",
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
  "tokenToAvaxPool": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "tokenToAvaxPool",
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
  "totalFee": {
    "inputs": [],
    "name": "totalFee",
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
  "withdraw": {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_slippage",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "xPTP": {
    "inputs": [],
    "name": "xPTP",
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

export const MainStaking_events = {
  "AddFee": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isPTP",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isAddress",
        "type": "bool"
      }
    ],
    "name": "AddFee",
    "type": "event"
  },
  "NewDeposit": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewDeposit",
    "type": "event"
  },
  "NewPtpStaked": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewPtpStaked",
    "type": "event"
  },
  "NewWithdraw": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewWithdraw",
    "type": "event"
  },
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
  "PoolAdded": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "name": "PoolAdded",
    "type": "event"
  },
  "PtpClaimed": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "PtpClaimed",
    "type": "event"
  },
  "PtpHarvested": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "callerFee",
        "type": "uint256"
      }
    ],
    "name": "PtpHarvested",
    "type": "event"
  },
  "RemoveFee": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "RemoveFee",
    "type": "event"
  },
  "RewardPaidTo": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "rewardToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "feeAmount",
        "type": "uint256"
      }
    ],
    "name": "RewardPaidTo",
    "type": "event"
  },
  "SetFee": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "SetFee",
    "type": "event"
  }
} as const;

export type CALLER_FEE_type = () => Promise<bigint>;
export type MAX_CALLER_FEE_type = () => Promise<bigint>;
export type MAX_FEE_type = () => Promise<bigint>;
export type __MainStaking_init_type = (_ptp: `0x${string}`, _staking_ptp: `0x${string}`, _stakingStable: `0x${string}`, _masterPlatypus: `0x${string}`, _masterVtx: `0x${string}`, _callerFee: bigint) => Promise<void>;
export type addFee_type = (max: bigint, min: bigint, value: bigint, to: `0x${string}`, isPTP: boolean, isAddress: boolean) => Promise<void>;
export type claimPTP_type = () => Promise<void>;
export type claimdAndStakePTP_type = () => Promise<void>;
export type computeAPR_type = () => Promise<`0x${string}`>;
export type deposit_type = (token: `0x${string}`, amount: bigint, sender: `0x${string}`) => Promise<void>;
export type feeInfos_type = (amount: bigint) => Promise<[bigint, bigint, bigint, `0x${string}`, boolean, boolean, boolean]>;
export type getDepositTokensForShares_type = (amount: bigint, token: `0x${string}`) => Promise<bigint>;
export type getLPTokensForShares_type = (amount: bigint, token: `0x${string}`) => Promise<bigint>;
export type getPoolInfo_type = (_address: `0x${string}`) => Promise<[bigint, boolean, `0x${string}`, `0x${string}`, bigint, `0x${string}`, bigint, `0x${string}`, `0x${string}`]>;
export type getSharesForDepositTokens_type = (amount: bigint, token: `0x${string}`) => Promise<bigint>;
export type getStakedPtp_type = () => Promise<bigint>;
export type getVePtp_type = () => Promise<bigint>;
export type harvest_type = (token: `0x${string}`, isUser: boolean, verbose: boolean) => Promise<void>;
export type masterPlatypus_type = () => Promise<`0x${string}`>;
export type masterVtx_type = () => Promise<`0x${string}`>;
export type owner_type = () => Promise<`0x${string}`>;
export type pools_type = (address: `0x${string}`) => Promise<[bigint, boolean, `0x${string}`, `0x${string}`, bigint, bigint, `0x${string}`, `0x${string}`, `0x${string}`]>;
export type ptp_type = () => Promise<`0x${string}`>;
export type registerPool_type = (_pid: bigint, _token: `0x${string}`, _lpAddress: `0x${string}`, receiptName: string, receiptSymbol: string, allocPoints: bigint) => Promise<void>;
export type removeFee_type = (index: bigint) => Promise<void>;
export type removePool_type = (token: `0x${string}`) => Promise<void>;
export type renounceOwnership_type = () => Promise<void>;
export type sendTokenRewards_type = (_token: `0x${string}`, _rewarder: `0x${string}`) => Promise<void>;
export type setCallerFee_type = (value: bigint) => Promise<void>;
export type setComputeAPR_type = (_computeAPR: `0x${string}`) => Promise<void>;
export type setFee_type = (index: bigint, value: bigint) => Promise<void>;
export type setXPTP_type = (_xPTP: `0x${string}`) => Promise<void>;
export type stakeAllPtp_type = () => Promise<void>;
export type stakePTP_type = (amount: bigint) => Promise<void>;
export type stakingStable_type = () => Promise<`0x${string}`>;
export type staking_ptp_type = () => Promise<`0x${string}`>;
export type tokenToAvaxPool_type = (address: `0x${string}`) => Promise<`0x${string}`>;
export type totalFee_type = () => Promise<bigint>;
export type transferOwnership_type = (newOwner: `0x${string}`) => Promise<void>;
export type withdraw_type = (token: `0x${string}`, _amount: bigint, _slippage: bigint, sender: `0x${string}`) => Promise<void>;
export type xPTP_type = () => Promise<`0x${string}`>;

export type AddFee_event_type = (to: `0x${string}`, value: bigint, isPTP: boolean, isAddress: boolean) => Promise<void>;
export type NewDeposit_event_type = (user: `0x${string}`, token: `0x${string}`, amount: bigint) => Promise<void>;
export type NewPtpStaked_event_type = (amount: bigint) => Promise<void>;
export type NewWithdraw_event_type = (user: `0x${string}`, token: `0x${string}`, amount: bigint) => Promise<void>;
export type OwnershipTransferred_event_type = (previousOwner: `0x${string}`, newOwner: `0x${string}`) => Promise<void>;
export type PoolAdded_event_type = (tokenAddress: `0x${string}`) => Promise<void>;
export type PtpClaimed_event_type = (amount: bigint) => Promise<void>;
export type PtpHarvested_event_type = (amount: bigint, callerFee: bigint) => Promise<void>;
export type RemoveFee_event_type = (to: `0x${string}`) => Promise<void>;
export type RewardPaidTo_event_type = (to: `0x${string}`, rewardToken: `0x${string}`, feeAmount: bigint) => Promise<void>;
export type SetFee_event_type = (to: `0x${string}`, value: bigint) => Promise<void>;