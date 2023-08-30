require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/vHnr95O1cOcr8loz3SkYF4ng0nuLYFyd",
      accounts: ['61a9fae2a22f051baa6cd934a3e5ca23834797b771ed1b1db913a536cd5ce63d']
    }
  }
};
