const { expect } = require("chai");

describe("MyNFT", function() {
    let MyNFT, myNFT, owner, recipient;

    beforeEach(async function () {
        MyNFT = await ethers.getContractFactory("MyNFT");
        [owner, recipient, ...others] = await ethers.getSigners();
        myNFT = await MyNFT.deploy("MyNFT", "MNFT");

        await myNFT.deployed();
    });

    it("should set the correct owner", async function() {
        expect(await myNFT.owner()).to.equal(owner.address);
    });

    it("should mint token correctly", async function() {
        await myNFT.connect(owner).mint(recipient.address, 1, "https://media.istockphoto.com/id/1190369461/vector/golden-coin-with-star-vector-illustration.jpg?s=612x612&w=0&k=20&c=oiTaDaruWtNyUWlYlbc4Nojd3H2soyPWhWPeIc5EzPE=");
        expect(await myNFT.ownerOf(1)).to.equal(recipient.address);
    });

    it("should set token URI correctly", async function() {
        await myNFT.connect(owner).mint(recipient.address, 1, "https://media.istockphoto.com/id/1190369461/vector/golden-coin-with-star-vector-illustration.jpg?s=612x612&w=0&k=20&c=oiTaDaruWtNyUWlYlbc4Nojd3H2soyPWhWPeIc5EzPE=");
        expect(await myNFT.tokenURI(1)).to.equal("https://media.istockphoto.com/id/1190369461/vector/golden-coin-with-star-vector-illustration.jpg?s=612x612&w=0&k=20&c=oiTaDaruWtNyUWlYlbc4Nojd3H2soyPWhWPeIc5EzPE=");
    });
});