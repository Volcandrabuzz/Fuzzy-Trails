# 🐾 Pet Adventure Contracts

This repository contains the smart contracts for the **Pet Adventure** game on **Avalanche Fuji Testnet**. The project consists of three main smart contracts that power the in-game economy, NFTs, and reward system.

## 🚀 Smart Contracts

### 🏆 PetAdvToken.sol
An **ERC20 token** contract that handles the in-game currency **Pet Adventure Tokens (PAT)**. Players can **buy tokens using USDC** at a configurable exchange rate.

🔹 **Deployed Contract:** [0xYourContractAddress](https://snowtrace.io/address/0xYourContractAddress)  

**🔧 Technologies:**
- OpenZeppelin **ERC20** implementation
- **IERC20** for USDC integration
- **Ownable** for access control

**✨ Features:**
✅ **Token minting** by authorized agents  
✅ **Token purchasing** with USDC  
✅ **Configurable exchange rate**  
✅ **Agent-based authorization system**  

---

### 🐶 PetAdvNFT.sol
An **ERC721 contract** representing the pets in the game. The **NFT metadata** is stored on **Whalepass** for decentralized and permanent storage.

🔹 **Deployed Contract:** [0xYourContractAddress](https://snowtrace.io/address/0xYourContractAddress)  

**🔧 Technologies:**
- OpenZeppelin **ERC721** implementation
- **Whalepass** for metadata storage
- **Ownable** for access control

**✨ Features:**
✅ **NFT minting** for unique pets  
✅ **Metadata integration** with Whalepass  
✅ **Controlled minting permissions**  

---

### 🎁 PetAdvRewards.sol
A **rewards distribution contract** that manages **USDC rewards** for players based on in-game achievements.

🔹 **Deployed Contract:** [0xYourContractAddress](https://snowtrace.io/address/0xYourContractAddress)  

**🔧 Technologies:**
- OpenZeppelin **Ownable** for access control
- **IERC20** for USDC rewards integration

**✨ Features:**
✅ **Automated USDC reward distribution**  
✅ **Configurable reward amounts**  
✅ **Controlled reward distribution**  

---

## 🔗 Technology Stack

- **Blockchain:** Avalanche Fuji Testnet  
- **Smart Contract Language:** Solidity `^0.8.19`  
- **Framework:** Foundry  
- **Token Standards:** ERC20, ERC721  
- **Libraries:** OpenZeppelin Contracts  
- **Metadata Storage:** Whalepass  

---

## ⚙️ Development

Each contract has:  
📜 **Deployment scripts** in `script/`  
🛠 **Test cases** in `test/`  
⚙️ **Configurations** in `foundry.toml`  

---

