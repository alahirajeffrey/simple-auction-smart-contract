const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Auction Contract", function () {
    it("Should ensure contract beneficiary is the one calling the smart contract ", async function () {

        const [owner] = await ethers.getSigners();
        const SimpleAuction = await ethers.getContractFactory("SimpleAuction");

        const auction = await SimpleAuction.deploy(owner.address, 500);

        expect(await auction.beneficiary()).to.equal(owner.address)
    });

    it("Should ensure the aucton time is correct ", async function () {

        const [owner] = await ethers.getSigners();
        const SimpleAuction = await ethers.getContractFactory("SimpleAuction");

        const auction = await SimpleAuction.deploy(owner.address, 500);

        const end = await auction.auctionEndTime()

        expect(end).to.equal(end)
    });

})

