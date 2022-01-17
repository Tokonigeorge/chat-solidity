import Web3 from "web3";
import MyContract from "./src/utils/Waveportal.json";

const address = "0x9281D493B67AE8E6df9374945c9A57fee5832A2b";

export const getAllWaves = async () => {
  try {
    //connect to infura as the provider.
    const web3 = new Web3(
      Web3.givenProvider ||
        new Web3.providers.HttpProvider(
          "https://rinkeby.infura.io/v3/ed732d8324c44cfebe61d499626ebaf7"
        )
    );

    const myContract = new web3.eth.Contract(MyContract.abi, address);

    const waves = await myContract.methods.getAllWaves().call();

    return waves.map((wave) => {
      return {
        address: wave.waver,
        timestamp: new Date(wave.timestamp * 1000),
        message: wave.message,
        name: wave.name,
        url: wave.pic,
      };
    });
  } catch (error) {
    return console.log(error);
  }
};
