import { ethers } from "ethers";
import abi from "../utils/Waveportal.json";
import { useDataContextVal } from "../context/dataContext";
import { updateWaves } from "../context/actions";

//get allwaves function
const contractAddress = "0xeF9F880554746131a35DfAd921E2Fd98C2a8bfee";
const contractABI = abi.abi;
const [{ waves }, dispatch] = useDataContextVal();
const allWaves = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      /*
       * Call the getAllWaves method from your Smart Contract
       */
      const waves = await wavePortalContract.getAllWaves();
      let wavesCleaned = [];
      waves.forEach((wave) => {
        wavesCleaned.push({
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message,
        });
      });

      /*
       * Store our data in React State
       */
      dispatch(updateWaves(wavesCleaned));
      console.log(waves);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
  return waves;
};
