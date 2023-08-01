// https://eth-sepolia.g.alchemy.com/v2/LC2XHery0VQR4bazGaiPyKDOcdivIUBp
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/LC2XHery0VQR4bazGaiPyKDOcdivIUBp',
      accounts: ['939cc28333b18ac461d6142037a2f712ca9f8c8250a4a8316dafd0a39d6774cc'],
    },
  },
};