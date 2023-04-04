require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY
const ZK_RPC_URL= process.env.ZK_RPC_URL

module.exports = {
  solidity: "0.8.18",
  defaultNetwork:"localhost",
  networks:{
    hardhat:{
      chainId:31337,
    },

    localhost:{
      chainId:31337,
    },

    zkEVMTest:{
      url:ZK_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:1442
    },


  
  },
  namedAccounts:{
    deployer:{
        default:0,
    },
  }
  
};