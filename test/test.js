const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Auction Contract", function () {

    let beneficiary;
    let SimpleAuction;
    let deployedAuction;


    beforeEach(async function () {

        const SimpleAuction = await ethers.getContractFactory("SimpleAuction");
        const [beneficiary] = await ethers.getSigners();

        const deployedAuction = await SimpleAuction.deploy(beneficiary.address, 500);

    })

    describe("Deployment", function () {
        it("Should set the right beneficiary", async function () {

            let beneficiary = await deployedAuction.beneficiary().toString()

            expect(beneficiary).to.equal(beneficiary.address)
        });

        it("Should set the right time for auction to end", async function () {

            expect(deployedAuction.auctionEndTime()).to.equal(500)
        });

    });
})

