// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
// Deploy script to push NFT to Polygon Mainnet
const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

const PUBLIC_OWNER = process.env.PUBLIC_OWNER; //safer

module.exports = buildModule("NFTMinterModule", (m) => {
    const initialOwner =m.getParameter("initialOwner", PUBLIC_OWNER);

    const lock =m.contract("NFTMinter",[initialOwner]);

    return {lock};
} );