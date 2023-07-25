const UnsDappArt = artifacts.require('UnsDappArt')

module.exports = function (deployer) {
    deployer.deploy(UnsDappArt, 
        'UnsDappArt',
        'UDA',
        'https://gateway.pinata.cloud/ipfs/QmTPShjSQDkkAWQsr43z8sDob5Kc3BFSgcBCciaYzfk7Mt/')
}