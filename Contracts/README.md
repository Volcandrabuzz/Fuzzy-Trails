# Pet Adventure Contracts

This repository contains the smart contracts for the Pet Adventure game on Base Sepolia. The project consists of three main contracts:

## Smart Contracts

### PetAdvToken.sol
An ERC20 token contract that handles the in-game currency. Players can buy tokens using USDC at a configurable exchange rate.

**Deployed Contract:** [0x3cA89Cc4b5B42bc33EE35299afD4Eb264F0e713C](https://sepolia.basescan.org/address/0x3cA89Cc4b5B42bc33EE35299afD4Eb264F0e713C)

**Technologies:**
- OpenZeppelin ERC20 implementation
- IERC20 for USDC integration
- Ownable for access control

**Features:**
- Token minting by authorized agents
- Token purchasing with USDC
- Configurable exchange rate
- Authorization system for agents

### PetAdvNFT.sol 
An ERC721 contract that represents the pets in the game. The NFTs metadata is stored on Whalepass for decentralized and permanent storage.

**Deployed Contract:** [0xd686F2838D67fB1c89652b338460F5a75427C46d](https://sepolia.basescan.org/address/0xd686F2838D67fB1c89652b338460F5a75427C46d)

**Technologies:**
- OpenZeppelin ERC721 implementation
- Whalepass for metadata storage
- Ownable for access control

**Features:**
- NFT minting functionality
- Metadata integration with Whalepass
- Authorization system for minting

### PetAdvRewards.sol
A rewards distribution contract that handles USDC rewards for players.

**Deployed Contract:** [0xCd4b68aEa3fc2Db21C441F53ABDA1EdFe68D8209](https://sepolia.basescan.org/address/0xCd4b68aEa3fc2Db21C441F53ABDA1EdFe68D8209)

**Technologies:**
- OpenZeppelin Ownable for access control
- IERC20 for USDC integration

**Features:**
- USDC reward distribution to players
- Configurable reward amounts
- Authorization system for reward distributors

## Technology Stack

- **Solidity:** ^0.8.19
- **Framework:** Foundry
- **Network:** Base Sepolia
- **Token Standards:** ERC20, ERC721
- **Dependencies:** OpenZeppelin Contracts
- **Metadata Storage:** Whalepass

## Development

Each contract has its own:
- Deployment script in the `script/` folder
- Comprehensive test suite in the `test/` folder
- Configuration in `foundry.toml`

## Testing and Deployment

The contracts include extensive test coverage and are deployed on Base Sepolia testnet. The deployment scripts use Foundry for deployment.