// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {PetAdvToken} from "../src/PetAdvToken.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Contract deployed on Base Sepolia
 * @notice You can view the deployed contract at:
 * https://sepolia.basescan.org/address/0x3cA89Cc4b5B42bc33EE35299afD4Eb264F0e713C
*/

contract PetAdvTokenTest is Test {
    PetAdvToken public token;
    address public usdcAddress;
    uint256 public initialExchangeRate;
    address public owner;
    address public user;

    function setUp() public {
        owner = address(this);
        user = address(0x1);
        usdcAddress = address(0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913);
        initialExchangeRate = 100;
        token = new PetAdvToken(usdcAddress, initialExchangeRate);
    }

    function test_InitialState() public {
        assertEq(token.usdcAddress(), usdcAddress);
        assertEq(token.exchangeRate(), initialExchangeRate);
        assertEq(token.owner(), owner);
    }

    function test_AuthorizeAgent() public {
        address agent = address(0x2);
        token.authorizeAgent(agent);
        assertTrue(token.authorizedAgents(agent));
    }

    function test_RevokeAgent() public {
        address agent = address(0x2);
        token.authorizeAgent(agent);
        token.revokeAgent(agent);
        assertFalse(token.authorizedAgents(agent));
    }

    function test_Mint() public {
        address agent = address(0x2);
        uint256 amount = 1000;
        
        token.authorizeAgent(agent);
        vm.prank(agent);
        token.mint(user, amount);
        
        assertEq(token.balanceOf(user), amount);
    }

    function test_BuyTokens() public {
        uint256 usdcAmount = 100;
        uint256 expectedTokens = (usdcAmount * 100) / initialExchangeRate;
        
        // Mock USDC contract behavior
        vm.mockCall(
            usdcAddress,
            abi.encodeWithSelector(IERC20.transferFrom.selector, user, address(token), usdcAmount),
            abi.encode(true)
        );
        
        vm.prank(user);
        token.buyTokens(usdcAmount);
        
        assertEq(token.balanceOf(user), expectedTokens);
    }

    function test_SetExchangeRate() public {
        uint256 newRate = 200;
        token.setExchangeRate(newRate);
        assertEq(token.exchangeRate(), newRate);
    }
}
