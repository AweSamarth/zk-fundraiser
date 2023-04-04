const {ethers, network} = require("hardhat")

module.exports = async function ({getNamedAccounts, deployments}){
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId
    console.log(chainId)
    await deploy("ZkFundraiser", {
        from:deployer,
        args:[],
        log:true
    })






}

module.exports.tags = ["fundraiser", "all"]