require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  networks: {
    arbitrum: {
      url: 'https://arb-rinkeby.g.alchemy.com/v2/QKgfwJW4WeaxoD2b3iImXkHcT0vyCsic', //rinkeby
      //url: 'https://arb-mainnet.g.alchemy.com/v2/W2wD65Co9MrZ_OgENWnj7Ti8ywffatma', // mainnet
      accounts: ['34b4cd2923d228b03d17546466af9b5007c2612737edb582227d34b630325b31']
    },
    optimism: {
      url:'https://opt-mainnet.g.alchemy.com/v2/DvsyaQ8CAh8xtxhcd3JaFmhaj8fp5R1s',
      accounts: ['34b4cd2923d228b03d17546466af9b5007c2612737edb582227d34b630325b31']
    }
  },
};
