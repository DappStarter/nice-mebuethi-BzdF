require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food stone raise stereo purse half end army giggle'; 
let testAccounts = [
"0xd6f4869e93bb61c24ba1be921894163276cef5584a4320b47da9064e2e6a06be",
"0x8273bf8d47b63ff7b79f39d35421dc7474ff28a60148307f492b9ff831d53bd2",
"0x4b7ff3ed440cba9f7c24365693758763516fcb089777664434d4b293d5b9844a",
"0xf9749f035a9b4c8ad2afee0abf829d6436403482142870238adee5ea9feb451a",
"0xbfecf5ea5b47160b8113201268bec63194141bbe1fadfa9e51e8cb3d28c3179a",
"0xb66fadf53d6e972d00a2f020de2fbbc45b8420244cf17f8627a026b6fa4dc3d6",
"0xb537a90c9421e62b995fbe082a0d1439a0a128910b7137d41a76d6edb06e6074",
"0xfd40634871109fae24542599e6e15c516d9acaa99c6442cd48db655f7001e2be",
"0xab0463b34bb1e1965121a3e1b54036775919d826d4666d71ec878f1ec6bd87a4",
"0xddd78480e288d1e5efbfda3d496c33a0880b687ca773277d1fc801fa6373d534"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


