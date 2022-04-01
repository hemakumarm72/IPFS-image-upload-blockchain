import contract from 'truffle-contract';

import web3 from './web3';
import ImageRegisterContractArtifact from '../contracts/ImageRegister.json';

let contractInstance;
let account;

const initialize = async () => {
  try {
    console.log('run');
    const imageRegisterContract = contract(ImageRegisterContractArtifact);
    imageRegisterContract.setProvider(web3.currentProvider);
    contractInstance = await imageRegisterContract.deployed();
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    console.log(web3, contractInstance, accounts[0]);
  } catch (error) {
    console.log('Error loading ImageRegister contract.', error);
  }
};

initialize();

export { web3, contractInstance, account };
