// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Waveportal {
    uint256 totalWaves;
    constructor () {
        console.log("Hello, It's me");
    }
    function wave() public{
        totalWaves +=1;
        console.log("I waved", msg.sender);
    }

    function getTotalWaves() public  view returns (uint256){
console.log("so the total wave is", totalWaves);
return totalWaves;
    }
}