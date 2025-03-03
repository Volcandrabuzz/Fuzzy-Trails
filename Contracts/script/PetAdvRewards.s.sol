// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {PetAdvRewards} from "../src/PetAdvRewards.sol";

contract PetAdvRewardsScript is Script {
    PetAdvRewards public rewards;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // USDC contract address on Base
        address usdcAddress = address(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
        uint256 rewardAmount = 1;
        rewards = new PetAdvRewards(usdcAddress, rewardAmount);

        vm.stopBroadcast();
    }
}
