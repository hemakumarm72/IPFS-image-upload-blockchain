import Web3 from 'web3';
// import React, { useEffect } from 'react';

require('dotenv').config();

let web3;

// const ganache = 'http://127.0.0.1:8545';
const ropsten = `https://ropsten.infura.io/v3/${process.env.ropsten_key}`;
// const rinkeby = 'https://rinkeby.infura.io/v3/${process.env.ropsten_key}';
const polgontestnet = 'https://matic-mumbai.chainstacklabs.com';
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
    // console.log(accounts);

    console.log('Injected web3 detected.');
    // automated switch network

    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x61',
          chainName: 'Smart Chain - Testnet',
          nativeCurrency: {
            name: 'Binance',
            symbol: 'BNB', // 2-6 characters long
            decimals: 18,
          },
          blockExplorerUrls: ['https://testnet.bscscan.com'],
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
        },
      ],

    });

    // end
  } else {
    // Fallback to localhost if no web3 injection. We've configured this to
    // use the development console's port by default.
    const provider = new Web3(ganache);
    web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
  }
};

onConnect();

// Update the document title using the browser API

export default web3;
