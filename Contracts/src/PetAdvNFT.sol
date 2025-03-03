// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0xd686F2838D67fB1c89652b338460F5a75427C46d
*/

contract PetAdvNFT is ERC721URIStorage, Ownable {
    address public petAdvTokenAddress; // PetAdvToken contract address
    uint256 public tokenCost; // Cost in PetAdv tokens to mint an NFT
    mapping(address => bool) public authorizedAgents; // List of authorized agents
    uint256 private currentTokenId; // ID of the next NFT to mint

    // Events
    event NFTMinted(address indexed to, uint256 tokenId, string tokenURI);
    event AgentAuthorized(address indexed agent);
    event AgentRevoked(address indexed agent);

    constructor(address _petAdvTokenAddress, uint256 _tokenCost) ERC721("PetAdvNFT", "PETNFT") Ownable(msg.sender){
        petAdvTokenAddress = _petAdvTokenAddress;
        tokenCost = _tokenCost;
    }

    // Function to authorize agents who can mint NFTs
    function authorizeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = true;
        emit AgentAuthorized(agent);
    }

    // Function to revoke agent authorization
    function revokeAgent(address agent) external onlyOwner {
        authorizedAgents[agent] = false;
        emit AgentRevoked(agent);
    }

    // Function for an agent to mint an NFT
    function mintNFT(address to, string memory tokenURI) external {
        require(authorizedAgents[msg.sender], "Not an authorized agent");

        currentTokenId++;
        _mint(to, currentTokenId);
        _setTokenURI(currentTokenId, tokenURI);

        emit NFTMinted(to, currentTokenId, tokenURI);
    }

    // Function to redeem PetAdv tokens for an NFT
    function redeemForNFT(string memory tokenURI) external {
        require(tokenCost > 0, "Token cost must be set");

        // Transfer PetAdv tokens from user to contract
        IERC20(petAdvTokenAddress).transferFrom(msg.sender, address(this), tokenCost);

        // Mint the NFT
        currentTokenId++;
        _mint(msg.sender, currentTokenId);
        _setTokenURI(currentTokenId, tokenURI);

        emit NFTMinted(msg.sender, currentTokenId, tokenURI);
    }

    // Function to adjust the cost in PetAdv tokens
    function setTokenCost(uint256 newCost) external onlyOwner {
        require(newCost > 0, "Token cost must be greater than 0");
        tokenCost = newCost;
    }
}