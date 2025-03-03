// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {PetAdvNFT} from "../src/PetAdvNFT.sol";

contract PetAdvNFTScript is Script {
    PetAdvNFT public nft;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        address petAdvTokenAddress = address(0);
        uint256 tokenCost = 100;
        nft = new PetAdvNFT(petAdvTokenAddress, tokenCost);

        vm.stopBroadcast();
    }
}
