// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Waveportal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message, string name, string pic);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
        string name; 
        string pic;
    } 
    Wave[] waves;
    constructor () {
        console.log("Hello, It's me");
    }

     function wave(string memory _message,string memory _name, string memory _pic) public {
        totalWaves += 1;
        console.log( msg.sender, _message, _name);

        waves.push(Wave(msg.sender, _message, block.timestamp, _name, _pic));

        emit NewWave(msg.sender, block.timestamp, _message, _name, _pic);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }


    // function wave() public{
    //     totalWaves +=1;
    //     console.log("I waved", msg.sender);
    // }

    function getTotalWaves() public  view returns (uint256){
console.log("so the total wave is", totalWaves);
return totalWaves;
    }
}