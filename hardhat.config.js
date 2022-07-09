require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/HpqK1Ig_qyGydmpTzKg48HZTwdHC5o_h',
      accounts: ['f4a5b71a790565201e104cc2802b27dfe790144bbb3ae4dc069623ea66e7fddd'],
    }
  }
};
