import Web3 from 'web3';

require('dotenv').config();

let web3;

// const ganache = 'http://127.0.0.1:8545';
const ropsten = 'https://ropsten.infura.io/v3/6a89a4fa89b34ae58139f4d04134bd05';
// const rinkeby = 'https://rinkeby.infura.io/v3/d6ec608e9f1b451488867a6ebed6c099';

// BSC mainnet
// const mainnet = 'https://bsc-dataseed1.binance.org:443';
// BSC testnet
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
const bsctestnet = 'https://data-seed-prebsc-1-s1.binance.org:8545';

const onConnect = async () => {
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider.
    web3 = new Web3(Web3.givenProvider || bsctestnet);
    const accounts = await web3.eth.requestAccounts();
    console.log(accounts[0]);
    console.log('Injected web3 detected.');
  } else {
    // Fallback to localhost if no web3 injection. We've configured this to
    // use the development console's port by default.
    const provider = new Web3(ganache);
    web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
  }
};
onConnect();

export default web3;
