// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {PetAdvToken} from "../src/PetAdvToken.sol";

contract PetAdvTokenScript is Script {
    PetAdvToken public token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        address usdcAddress = address(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
        uint256 initialExchangeRate = 100;
        token = new PetAdvToken(usdcAddress, initialExchangeRate);

        vm.stopBroadcast();
    }
}
