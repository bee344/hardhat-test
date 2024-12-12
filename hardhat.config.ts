import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "../hardhat-revive/packages/hardhat-resolc/src/index"


const config: HardhatUserConfig = {
  solidity: "0.8.28", 
  networks: {
    hardhat: {
      polkavm: true,
    },
  },
  resolc: {
    version: '1.5.2',
    compilerSource: 'remix',
    settings: {
      optimizer: {
        enabled: true,
        runs: 400
      },
      evmVersion: "istanbul"
    },
  },
};

export default config;
