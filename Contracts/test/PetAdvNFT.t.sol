// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {PetAdvNFT} from "../src/PetAdvNFT.sol";
import {PetAdvToken} from "../src/PetAdvToken.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0xd686F2838D67fB1c89652b338460F5a75427C46d
*/

contract PetAdvNFTTest is Test {
    PetAdvNFT public nft;
    PetAdvToken public token;
    address public owner;
    address public user;
    uint256 public tokenCost;
    string constant TEST_URI = "ipfs://test-uri";

    function setUp() public {
        owner = address(this);
        user = address(0x1);
        tokenCost = 100;
        
        // Deploy token first
        token = new PetAdvToken(address(0), 100); // Using dummy USDC address
        
        // Deploy NFT with token address
        nft = new PetAdvNFT(address(token), tokenCost);
    }

    function test_InitialState() public {
        assertEq(nft.petAdvTokenAddress(), address(token));
        assertEq(nft.tokenCost(), tokenCost);
        assertEq(nft.owner(), owner);
    }

    function test_AuthorizeAgent() public {
        address agent = address(0x2);
        nft.authorizeAgent(agent);
        assertTrue(nft.authorizedAgents(agent));
    }

    function test_RevokeAgent() public {
        address agent = address(0x2);
        nft.authorizeAgent(agent);
        nft.revokeAgent(agent);
        assertFalse(nft.authorizedAgents(agent));
    }

    function test_MintNFT() public {
        address agent = address(0x2);
        
        nft.authorizeAgent(agent);
        vm.prank(agent);
        nft.mintNFT(user, TEST_URI);
        
        assertEq(nft.ownerOf(1), user);
        assertEq(nft.tokenURI(1), TEST_URI);
    }

    function test_RedeemForNFT() public {
        // Mint tokens to user first
        token.authorizeAgent(owner);
        token.mint(user, tokenCost);
        
        // Approve NFT contract to spend tokens
        vm.prank(user);
        token.approve(address(nft), tokenCost);
        
        // Redeem NFT
        vm.prank(user);
        nft.redeemForNFT(TEST_URI);
        
        assertEq(nft.ownerOf(1), user);
        assertEq(nft.tokenURI(1), TEST_URI);
        assertEq(token.balanceOf(user), 0);
        assertEq(token.balanceOf(address(nft)), tokenCost);
    }

    function test_SetTokenCost() public {
        uint256 newCost = 200;
        nft.setTokenCost(newCost);
        assertEq(nft.tokenCost(), newCost);
    }
}
