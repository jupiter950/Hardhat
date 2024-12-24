require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-verify")
require("solidity-coverage")
require("dotenv").config()

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
    solidity: {
        version: "0.8.20",
    },
    networks: {
        sepolia: {
            url: RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    etherscan: {
        apiKey: {
          sepolia: "7PR8HDU5NIJDR5S747IS18U3AN3878ZTSX", // Replace with your Etherscan API key
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        tokenOwner: {
            default: 1,
        },
    },
    paths: {
        sources: "src",
    },
}
