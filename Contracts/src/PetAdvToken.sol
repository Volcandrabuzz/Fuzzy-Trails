// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0x3cA89Cc4b5B42bc33EE35299afD4Eb264F0e713C
*/

contract PetAdvToken is ERC20, Ownable {
    // USDC contract address on Base blockchain
    address public usdcAddress;
    uint256 public exchangeRate; // Exchange rate: USDC per 100 PetAdv tokens
    mapping(address => bool) public authorizedAgents;

    // Events
    event TokensMinted(address indexed to, uint256 amount);
    event TokensPurchased(address indexed buyer, uint256 usdcSpent, uint256 tokensReceived);
    event AgentAuthorized(address indexed agent);
    event AgentRevoked(address indexed agent);

    constructor(address _usdcAddress, uint256 _initialExchangeRate) ERC20("PetAdvToken", "PETADV") Ownable(msg.sender){
        usdcAddress = _usdcAddress;
        exchangeRate = _initialExchangeRate;
    }

    // Function to authorize agents who can mint tokens
    function authorizeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = true;
        emit AgentAuthorized(agent);
    }

    // Function to revoke agent authorization
    function revokeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = false;
        emit AgentRevoked(agent);
    }

    // Function for agents to mint tokens
    function mint(address to, uint256 amount) external {
        require(authorizedAgents[msg.sender], "Not an authorized agent");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    // Function to buy tokens with USDC
    function buyTokens(uint256 usdcAmount) external {
        require(usdcAmount > 0, "USDC amount must be greater than 0");

        // Calculate tokens to deliver
        uint256 tokensToMint = (usdcAmount * 100) / exchangeRate;

        // Transfer USDC from buyer to contract
        IERC20(usdcAddress).transferFrom(msg.sender, address(this), usdcAmount);

        // Mint tokens and send them to buyer
        _mint(msg.sender, tokensToMint);

        emit TokensPurchased(msg.sender, usdcAmount, tokensToMint);
    }

    // Function to change exchange rate
    function setExchangeRate(uint256 newRate) external onlyOwner {
        require(newRate > 0, "Exchange rate must be greater than 0");
        exchangeRate = newRate;
    }
}