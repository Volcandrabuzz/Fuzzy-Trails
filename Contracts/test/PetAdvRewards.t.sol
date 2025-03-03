// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {PetAdvRewards} from "../src/PetAdvRewards.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0xCd4b68aEa3fc2Db21C441F53ABDA1EdFe68D8209
*/

contract PetAdvRewardsTest is Test {
    PetAdvRewards public rewards;
    address public usdcAddress;
    uint256 public rewardAmount;
    address public owner;
    address public user;

    function setUp() public {
        owner = address(this);
        user = address(0x1);
        usdcAddress = address(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
        rewardAmount = 1;
        rewards = new PetAdvRewards(usdcAddress, rewardAmount);
    }

    function test_InitialState() public {
        assertEq(rewards.usdcTokenAddress(), usdcAddress);
        assertEq(rewards.rewardAmount(), rewardAmount);
        assertEq(rewards.owner(), owner);
    }

    function test_AuthorizeAgent() public {
        address agent = address(0x2);
        rewards.authorizeAgent(agent);
        assertTrue(rewards.authorizedAgents(agent));
    }

    function test_RevokeAgent() public {
        address agent = address(0x2);
        rewards.authorizeAgent(agent);
        rewards.revokeAgent(agent);
        assertFalse(rewards.authorizedAgents(agent));
    }

    function test_DistributeReward() public {
        address agent = address(0x2);
        
        // Authorize agent
        rewards.authorizeAgent(agent);
        
        // Mock USDC transfer
        vm.mockCall(
            usdcAddress,
            abi.encodeWithSelector(IERC20.transfer.selector, user, rewardAmount),
            abi.encode(true)
        );
        
        // Distribute reward
        vm.prank(agent);
        rewards.distributeReward(user);
    }

    function test_SetRewardAmount() public {
        uint256 newAmount = 2;
        rewards.setRewardAmount(newAmount);
        assertEq(rewards.rewardAmount(), newAmount);
    }
}
