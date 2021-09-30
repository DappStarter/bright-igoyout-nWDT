require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift regret oval upset hunt produce army gate'; 
let testAccounts = [
"0xad76daa67e844d7900912874f0b977f80b02b147b69b572a8f89cfd42fa43f84",
"0xd36467873741288dc8cf774d2a6b48e214aa85a685d14b9a1c34503f09d630c5",
"0x9bd5dd6fb73275cc16125ad4373c4fda0dad3773a92f98d363beb3b75eae2597",
"0x40012812bd0209c41f932fae61dbe80bd8eab05a6702823d2d61be4600cf61ff",
"0x84a102fddf99427df60dc9ac80ef2ed648652bf1da87a82afcfe5b25a1740bdc",
"0x58bbede5ba846e4ba67c2f1b86141b84983dd46bd7e46022b9b157f58fc6f57a",
"0x140c134261da9e7b92ad38c028cab538eaae3d660dea6b2b5d812c976316ff7a",
"0xa531bca2e9143b92ce9b37eb473edcf87008544459566d50d040c7fef95ba587",
"0x19dddd510bfa6edf3f55b74240e16c19f573e99497e5372b6126bc33ed6d2caf",
"0x0efe093d21ac1f156f57833c9a3cc4e62260655833ddd70e4c5a08b3144c215a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

