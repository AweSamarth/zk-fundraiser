export const ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
export const ABI=[
    {
      "inputs": [],
      "name": "noBalance",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "_id",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "CampaignCreated",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint128",
          "name": "_ethAmountNeeded",
          "type": "uint128"
        }
      ],
      "name": "createCampaign",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_id",
          "type": "uint64"
        }
      ],
      "name": "fundCampaign",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
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
          "internalType": "uint64",
          "name": "_id",
          "type": "uint64"
        }
      ],
      "name": "getCampaign",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "campaigner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "uint256",
              "name": "amountNeeded",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountReceived",
              "type": "uint256"
            }
          ],
          "internalType": "struct ZkFundraiser.Campaign",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCounter",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
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
      "name": "getOnesCampaigns",
      "outputs": [
        {
          "internalType": "uint64[]",
          "name": "",
          "type": "uint64[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]

