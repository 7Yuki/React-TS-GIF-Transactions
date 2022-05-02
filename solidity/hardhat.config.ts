import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const FANTOM_TESTNET_RPC_URL : string = 'https://xapi.testnet.fantom.network/lachesis'
const TESTING_PRIVATE_KEY : string = 'YOUR PRIVATE KEY'


export default {
  solidity: "0.8.0",
  networks: {
    fantom: {
      url: FANTOM_TESTNET_RPC_URL,
      accounts: [`${TESTING_PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: {
      opera: 'YOUR API KEY',
      ftmTestnet: 'YOUR API KEY'
    }
  }
};