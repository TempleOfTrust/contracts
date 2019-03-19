var TempleOfTrust = artifacts.require("TradeableERC721Token");

const empty_address = '0x0000000000000000000000000000000000000000';

module.exports = async function (deployer, network, accounts) {

    let totInstance;

    let NFTName = "Temple Of Trust";
    let NFTSym = "TRUST";
    let NFTUri = "http://templeoftrust.eu-central-1.elasticbeanstalk.com/rest-api/v1/nft/templeoftrust/" + NFTSym + "/";

    console.log(`  === Deploying Temple of Trust contracts to ${network}...`);
    await deployer.deploy(TempleOfTrust, NFTName, NFTSym, empty_address, NFTUri);
    totInstance = await TempleOfTrust.deployed();
    console.log('Temple of Trust: NEW ' + totInstance.address);

    //totInstance = await TempleOfTrust.at("0xa43328d3fc9ded05d11cda387623aa8b5120b763");
    await totInstance.mintTo(accounts[0]);
    console.log('Minted one to owner');

}