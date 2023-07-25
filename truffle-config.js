const path = require('path')
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: 'tu_apikey_etherscan'
    },
    contracts_build_directory: path.join(__dirname, "app/contracts"),
    networks: {
        sepolia: {
            provider: () => new HDWalletProvider(
                'frase secreta aquí',
                `https://sepolia.infura.io/v3/`, 0),
            from: "tu_dirreccion_metamask",
            network_id: 10001, // Sepolia's network ID
            gas: 4000000, // Adjust the gas limit as per your requirements
            gasPrice: 10000000000, // Set the gas price to an appropriate value
            confirmations: 2, // Set the number of confirmations needed for a transaction
            timeoutBlocks: 200, // Set the timeout for transactions
            skipDryRun: true // Skip the dry run option
        },
    },
    compilers: {
        solc: {
            version: "0.8.9"
        }
    }
}