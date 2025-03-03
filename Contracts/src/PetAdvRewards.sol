// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0xCd4b68aEa3fc2Db21C441F53ABDA1EdFe68D8209
*/

contract PetAdvRewards is Ownable {
    address public usdcTokenAddress; // Address of USDC contract on Base
    mapping(address => bool) public authorizedAgents; // Authorized agents
    uint256 public rewardAmount; // Amount of USDC per reward

    // Events
    event RewardDistributed(address indexed player, uint256 amount);
    event AgentAuthorized(address indexed agent);
    event AgentRevoked(address indexed agent);

    constructor(address _usdcTokenAddress, uint256 _rewardAmount) Ownable(msg.sender) {
        usdcTokenAddress = _usdcTokenAddress;
        rewardAmount = _rewardAmount;
    }

    // Function to authorize agents
    function authorizeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = true;
        emit AgentAuthorized(agent);
    }

    // Function to revoke authorization
    function revokeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = false;
        emit AgentRevoked(agent);
    }

    // Function to distribute rewards to a player
    function distributeReward(address player) external {
        require(authorizedAgents[msg.sender], "Not an authorized agent");
        require(player != address(0), "Invalid player address");

        // Transfer USDC to player
        IERC20(usdcTokenAddress).transfer(player, rewardAmount);

        emit RewardDistributed(player, rewardAmount);
    }

    // Function to update reward amount
    function setRewardAmount(uint256 newAmount) external onlyOwner {
        require(newAmount > 0, "Reward amount must be greater than zero");
        rewardAmount = newAmount;
    }
}
