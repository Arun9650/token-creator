
const ERC20abi  =  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "Created",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isBurnable_",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isMintable_",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "totalSuppy_",
          "type": "uint256"
        }
      ],
      "name": "create",
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
      "name": "getAllTokens",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isBurnable",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isMintable",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "internalType": "struct ERC20Token[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]


  export { ERC20abi }