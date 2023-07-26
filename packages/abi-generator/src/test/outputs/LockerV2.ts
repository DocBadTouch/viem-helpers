export const LockerV2_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "Claim",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
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
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "ResetSlot",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
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
    "name": "Transfer",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Unlock",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "strategyIndex",
        "type": "uint256"
      }
    ],
    "name": "UnlockStarts",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
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
    "name": "VTX",
    "outputs": [
      {
        "internalType": "contract IERC20",
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
        "name": "_masterchief",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_maxSlots",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_previousLocker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rewarder",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stakingToken",
        "type": "address"
      }
    ],
    "name": "__LockerV2_init_",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rewardPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_forfeitPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_instantUnstakePercent",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_isLinear",
        "type": "bool"
      }
    ],
    "name": "addNewStrategy",
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
      },
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "addToUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
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
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
    "name": "bribeManager",
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
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "cancelUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      }
    ],
    "name": "claimFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "internalType": "address",
        "name": "_for",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "depositFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getAllUserUnlocking",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "unlockingStrategy",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "alreadyUnstaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "alreadyWithdrawn",
            "type": "uint256"
          }
        ],
        "internalType": "struct LockerV2.UserUnlocking[]",
        "name": "slots",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "n",
        "type": "uint256"
      }
    ],
    "name": "getUserNthSlot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unlockingStrategy",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyWithdrawn",
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
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserRewardPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "rewardPercentage",
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
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserSlotLength",
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
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserTotalDeposit",
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
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "masterchief",
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
    "name": "maxSlot",
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
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "bool[]",
        "name": "onlyDeposit",
        "type": "bool[]"
      }
    ],
    "name": "migrate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "bool[]",
        "name": "onlyDeposit",
        "type": "bool[]"
      }
    ],
    "name": "migrateFor",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "migrated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "previousLocker",
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
    "name": "rewarder",
    "outputs": [
      {
        "internalType": "contract IBaseRewardPoolLocker",
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
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setBribeManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxDeposits",
        "type": "uint256"
      }
    ],
    "name": "setMaxSlots",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "strategyIndex",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setStrategyStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setWhitelistForTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakeInMasterChief",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stakingToken",
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
        "name": "strategyIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "startUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalLocked",
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
    "name": "totalSupply",
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
    "name": "totalUnlocking",
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
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "transferWhitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
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
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "unlock",
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
    "name": "unlockingStrategies",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "unlockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "forfeitPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rewardPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "instantUnstakePercent",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isLinear",
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
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "userUnlocking",
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
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userUnlockings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unlockingStrategy",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyWithdrawn",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const LockerV2_functions = {
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
  "VTX": {
    "inputs": [],
    "name": "VTX",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "__LockerV2_init_": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_masterchief",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_maxSlots",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_previousLocker",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_rewarder",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stakingToken",
        "type": "address"
      }
    ],
    "name": "__LockerV2_init_",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "addNewStrategy": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_lockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rewardPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_forfeitPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_instantUnstakePercent",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_isLinear",
        "type": "bool"
      }
    ],
    "name": "addNewStrategy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "addToUnlock": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "addToUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "allowance": {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
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
  "approve": {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "balanceOf": {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
  "bribeManager": {
    "inputs": [],
    "name": "bribeManager",
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
  "cancelUnlock": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "cancelUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "claim": {
    "inputs": [],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "claimFor": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      }
    ],
    "name": "claimFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "decimals": {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "decreaseAllowance": {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
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
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "depositFor": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "depositFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "getAllUserUnlocking": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getAllUserUnlocking",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "unlockingStrategy",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "alreadyUnstaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "alreadyWithdrawn",
            "type": "uint256"
          }
        ],
        "internalType": "struct LockerV2.UserUnlocking[]",
        "name": "slots",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getUserNthSlot": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "n",
        "type": "uint256"
      }
    ],
    "name": "getUserNthSlot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unlockingStrategy",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyWithdrawn",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getUserRewardPercentage": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserRewardPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "rewardPercentage",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "getUserSlotLength": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserSlotLength",
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
  "getUserTotalDeposit": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserTotalDeposit",
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
    "inputs": [],
    "name": "harvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "increaseAllowance": {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "masterchief": {
    "inputs": [],
    "name": "masterchief",
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
  "maxSlot": {
    "inputs": [],
    "name": "maxSlot",
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
  "migrate": {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "bool[]",
        "name": "onlyDeposit",
        "type": "bool[]"
      }
    ],
    "name": "migrate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "migrateFor": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "bool[]",
        "name": "onlyDeposit",
        "type": "bool[]"
      }
    ],
    "name": "migrateFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "migrated": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "migrated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "name": {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
  "pause": {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "paused": {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "previousLocker": {
    "inputs": [],
    "name": "previousLocker",
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
  "rewarder": {
    "inputs": [],
    "name": "rewarder",
    "outputs": [
      {
        "internalType": "contract IBaseRewardPoolLocker",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "setBribeManager": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setBribeManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setMaxSlots": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxDeposits",
        "type": "uint256"
      }
    ],
    "name": "setMaxSlots",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setStrategyStatus": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "strategyIndex",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setStrategyStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "setWhitelistForTransfer": {
    "inputs": [
      {
        "internalType": "address",
        "name": "_for",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setWhitelistForTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "stakeInMasterChief": {
    "inputs": [],
    "name": "stakeInMasterChief",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "stakingToken": {
    "inputs": [],
    "name": "stakingToken",
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
  "startUnlock": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "strategyIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "startUnlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "symbol": {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "totalLocked": {
    "inputs": [],
    "name": "totalLocked",
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
  "totalSupply": {
    "inputs": [],
    "name": "totalSupply",
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
  "totalUnlocking": {
    "inputs": [],
    "name": "totalUnlocking",
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
  "transfer": {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "transferFrom": {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
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
  "transferWhitelist": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "transferWhitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  "unlock": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "unlock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "unlockingStrategies": {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "unlockingStrategies",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "unlockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "forfeitPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rewardPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "instantUnstakePercent",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isLinear",
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
  "unpause": {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  "userUnlocking": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "userUnlocking",
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
  "userUnlockings": {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userUnlockings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "unlockingStrategy",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "alreadyWithdrawn",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
} as const;

export const LockerV2_events = {
  "Approval": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  "Claim": {
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "Claim",
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
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
  "Paused": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  "ResetSlot": {
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "slotIndex",
        "type": "uint256"
      }
    ],
    "name": "ResetSlot",
    "type": "event"
  },
  "Transfer": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
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
    "name": "Transfer",
    "type": "event"
  },
  "Unlock": {
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Unlock",
    "type": "event"
  },
  "UnlockStarts": {
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
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "strategyIndex",
        "type": "uint256"
      }
    ],
    "name": "UnlockStarts",
    "type": "event"
  },
  "Unpaused": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  }
} as const;

export type DENOMINATOR_type = () => Promise<bigint>;
export type VTX_type = () => Promise<`0x${string}`>;
export type __LockerV2_init__type = (_masterchief: `0x${string}`, _maxSlots: bigint, _previousLocker: `0x${string}`, _rewarder: `0x${string}`, _stakingToken: `0x${string}`) => Promise<void>;
export type addNewStrategy_type = (_lockTime: bigint, _rewardPercent: bigint, _forfeitPercent: bigint, _instantUnstakePercent: bigint, _isLinear: boolean) => Promise<void>;
export type addToUnlock_type = (amount: bigint, slotIndex: bigint) => Promise<void>;
export type allowance_type = (owner: `0x${string}`, spender: `0x${string}`) => Promise<bigint>;
export type approve_type = (spender: `0x${string}`, amount: bigint) => Promise<boolean>;
export type balanceOf_type = (account: `0x${string}`) => Promise<bigint>;
export type bribeManager_type = () => Promise<`0x${string}`>;
export type cancelUnlock_type = (slotIndex: bigint) => Promise<void>;
export type claim_type = () => Promise<void>;
export type claimFor_type = (_for: `0x${string}`) => Promise<void>;
export type decimals_type = () => Promise<number | bigint>;
export type decreaseAllowance_type = (spender: `0x${string}`, subtractedValue: bigint) => Promise<boolean>;
export type deposit_type = (_amount: bigint) => Promise<void>;
export type depositFor_type = (_for: `0x${string}`, _amount: bigint) => Promise<void>;
export type getAllUserUnlocking_type = (_user: `0x${string}`) => Promise<({
            startTime: bigint, endTime: bigint, amount: bigint, unlockingStrategy: bigint, alreadyUnstaked: bigint, alreadyWithdrawn: bigint
          } | [
            bigint, bigint, bigint, bigint, bigint, bigint
          ])[]>;
export type getUserNthSlot_type = (_user: `0x${string}`, n: bigint) => Promise<[bigint, bigint, bigint, bigint, bigint, bigint]>;
export type getUserRewardPercentage_type = (_user: `0x${string}`) => Promise<bigint>;
export type getUserSlotLength_type = (_user: `0x${string}`) => Promise<bigint>;
export type getUserTotalDeposit_type = (_user: `0x${string}`) => Promise<bigint>;
export type harvest_type = () => Promise<void>;
export type increaseAllowance_type = (spender: `0x${string}`, addedValue: bigint) => Promise<boolean>;
export type masterchief_type = () => Promise<`0x${string}`>;
export type maxSlot_type = () => Promise<bigint>;
export type migrate_type = (user: `0x${string}`, onlyDeposit: boolean[]) => Promise<void>;
export type migrateFor_type = (_from: `0x${string}`, _to: `0x${string}`, onlyDeposit: boolean[]) => Promise<void>;
export type migrated_type = (address: `0x${string}`) => Promise<boolean>;
export type name_type = () => Promise<any /**string*/>;
export type owner_type = () => Promise<`0x${string}`>;
export type pause_type = () => Promise<void>;
export type paused_type = () => Promise<boolean>;
export type previousLocker_type = () => Promise<`0x${string}`>;
export type renounceOwnership_type = () => Promise<void>;
export type rewarder_type = () => Promise<`0x${string}`>;
export type setBribeManager_type = (_address: `0x${string}`) => Promise<void>;
export type setMaxSlots_type = (_maxDeposits: bigint) => Promise<void>;
export type setStrategyStatus_type = (strategyIndex: bigint, status: boolean) => Promise<void>;
export type setWhitelistForTransfer_type = (_for: `0x${string}`, status: boolean) => Promise<void>;
export type stakeInMasterChief_type = () => Promise<void>;
export type stakingToken_type = () => Promise<`0x${string}`>;
export type startUnlock_type = (strategyIndex: bigint, amount: bigint, slotIndex: bigint) => Promise<void>;
export type symbol_type = () => Promise<any /**string*/>;
export type totalLocked_type = () => Promise<bigint>;
export type totalSupply_type = () => Promise<bigint>;
export type totalUnlocking_type = () => Promise<bigint>;
export type transfer_type = (recipient: `0x${string}`, amount: bigint) => Promise<boolean>;
export type transferFrom_type = (sender: `0x${string}`, recipient: `0x${string}`, amount: bigint) => Promise<boolean>;
export type transferOwnership_type = (newOwner: `0x${string}`) => Promise<void>;
export type transferWhitelist_type = (address: `0x${string}`) => Promise<boolean>;
export type unlock_type = (slotIndex: bigint) => Promise<void>;
export type unlockingStrategies_type = (amount: bigint) => Promise<[bigint, bigint, bigint, bigint, boolean, boolean]>;
export type unpause_type = () => Promise<void>;
export type userUnlocking_type = (address: `0x${string}`) => Promise<bigint>;
export type userUnlockings_type = (address: `0x${string}`, amount: bigint) => Promise<[bigint, bigint, bigint, bigint, bigint, bigint]>;

export type Approval_event_type = (owner: `0x${string}`, spender: `0x${string}`, value: bigint) => Promise<void>;
export type Claim_event_type = (user: `0x${string}`, timestamp: bigint) => Promise<void>;
export type NewDeposit_event_type = (user: `0x${string}`, timestamp: bigint, amount: bigint) => Promise<void>;
export type OwnershipTransferred_event_type = (previousOwner: `0x${string}`, newOwner: `0x${string}`) => Promise<void>;
export type Paused_event_type = (account: `0x${string}`) => Promise<void>;
export type ResetSlot_event_type = (user: `0x${string}`, timestamp: bigint, amount: bigint, slotIndex: bigint) => Promise<void>;
export type Transfer_event_type = (from: `0x${string}`, to: `0x${string}`, value: bigint) => Promise<void>;
export type Unlock_event_type = (user: `0x${string}`, timestamp: bigint, amount: bigint) => Promise<void>;
export type UnlockStarts_event_type = (user: `0x${string}`, timestamp: bigint, amount: bigint, strategyIndex: bigint) => Promise<void>;
export type Unpaused_event_type = (account: `0x${string}`) => Promise<void>;