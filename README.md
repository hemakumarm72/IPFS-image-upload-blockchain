# ipfs-image-upload deploy Binance smartchain

final year project

architecture - Reactjs Frontend application, Binance(BNB) testnet, metamask, IPFS, peer-to-peer

# URL

https://6246a7a4e994054b435eb788--snazzy-nasturtium-f1742d.netlify.app/

# Testnet blockchain infrastructure model

decentrilzation stored mete data, image, important document image and privacy all
they secure store use upload image required BNB token for testnet

testnet link

install doc setup project
https://github.com/ChainSafe/web3.js for install web3js config reactjs

# FaucetBNB

     claim link: https://testnet.binance.org/faucet-smart

# Metamask config

      network name = Binane testnet
      New RPC URL = https://data-seed-prebsc-1-s1.binance.org:8545/
      Chain ID = 97
      Currency Symbol = BNB
      Block Explorer URL = https://testnet.bscscan.com

## Overview

IPFS and the Blockchain are a perfect match. Why? You can address large amounts of data with IPFS and place the immutable, permanent IPFS links into a blockchain transaction. This will timestamp and secure your content, without having to put the data on the chain itself. You now have undisputable proof that your image existed at that time it was uploaded.

This project is an Ethereum Decentralized Application (dApp) using React, Redux, React Router and Bootstrap. It demonstrates how to implement IPFS file uploads and store the IPFS hash on the blockchain.

## Usage

### Main Page

In this application, the main page displays a list of image cards filtered by owner i.e. MetaMask account. Each image card displays the image, title, description, tags, upload timestamp and IPFS hash.

![IPFS Image dApp](../master/assets/screenshots/app.png?raw=true 'IPFS Image dApp')

### Upload an Image

Click _Upload Image_ to upload an image to IPFS and the blockchain. You are required to enter an image title, optional description and appropriate tags. Click _Upload_ to submit.

![IPFS Image dApp](../master/assets/screenshots/upload-image.png?raw=true 'Upload Image')

<strong>Note</strong>: You can find sample images in the `assets/sample-images` folder.

### View Details

Click _Details_ to view the image and blockchain transaction details.

<strong>Note</strong>: The current version of the application does not persist the blockchain transaction information in a permanent store such as MongoDB or PostgreSQL. Instead, we chose to store it in browser local storage keyed by the account address so to provide a better user experience. Otherwise, this information is lost when you refresh the browser or login as another user. Keep in mind that this information is transient when running Ganache. Be sure to clear local storage before restarting the app by following these [instructions](https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage#local-storage).

![IPFS Image dApp](../master/assets/screenshots/view-details.png?raw=true 'View Details')

## Our stack

For this project, we used the following stack:

- Solidity Smart Contracts
- IPFS for storing image data via Infura
- Truffle and Ganache for our development and testing framework
- React / Redux / Bootstrap 4 for our front-end development
- MetaMask for our web3 provider
- OpenZeppelin library

## Prerequisites

1.  You will need [Metamask](https://metamask.io/) plugin for Chrome.
2.  Make sure you have [Node.js](https://nodejs.org/en/) installed.

## Installation

1.  Install [Truffle Framework](http://truffleframework.com/) and [Ganache CLI](http://truffleframework.com/ganache/) globally. If you prefer, the graphical version of Ganache works as well.

    ```bash
    npm install -g truffle
    npm install -g ganache-cli
    ```

    <strong>Note</strong>: The graphical version of Ganache seems to be more stable on Mac whereas Ganache CLI works fine on Ubuntu.

2.  Run the development blockchain.

    ```bash
    // no blocktime specified so transaction will be mined instantly
    ganache-cli
    ```

    You may want to pass in a blocktime. Otherwise, it's difficult to track things like loading indicators because Ganache will mine instantly.

    <strong>Note</strong>: We've noticed that using a blocktime while running `truffle test` causes issues.

    ```bash
    // 3 second blocktime
    ganache-cli -b 3
    ```

3.  Open another terminal, clone this repo and install its dependencies.

    ```bash
    git clone https://github.com/iwaldman/ipfs-image-dapp.git

    cd ipfs-image-dapp

    npm install
    ```

    <strong>Note</strong>: If you get an error on install, don't panic. It should still work.

4.  Compile and migrate the smart contracts.

    ```bash
    truffle compile
    truffle migrate

    # You can combine into one command
    truffle migrate --reset ---compile-all
    ```

5.  Start the application

    ```bash
    npm run start
    ```

6.  Navigate to http://localhost:3000/ in your browser.

7.  Remember to connect [MetaMask](https://metamask.io/) to one of your local Ganache Ethereum accounts

    - Connect to Localhost 8545, or
    - Create and connect to a custom RPC network using the Ganache RPC server (currently `http://127.0.0.1:8545`), then
    - Import a new account and use the account seed phrase provided by Ganache

      ![IPFS Image dApp](../master/assets/screenshots/metamask-choose-network.png?raw=true 'MetaMask Choose Network')

## Testing

### To run the unit tests.

Open a terminal and run `truffle test` or `npm run sol:test`.

```shell
$ truffle test
Using network 'development'.

  Contract: ImageRegister
    ✓ has an owner
    ✓ should selfdestruct (59ms)
    ✓ should store an image (75ms)
    ✓ should emit a LogImageUploaded event when storing an image (83ms)
    ✓ should return image details (103ms)
    ✓ should return image count (139ms)
    ✓ should store images for any number of owners (255ms)
    ✓ should require a valid IPFS hash when uploading an image (42ms)
    ✓ should require a valid title when uploading an image (44ms)
    ✓ should require a valid description when uploading an image (76ms)
    ✓ should require tags when uploading an image (42ms)
    ✓ should require a valid address when retrieving image count
    ✓ should require a valid index when retrieving image details
    ✓ should allow the owner to perform an emergency stop
    ✓ should disallow a non-owner to perform an emergency stop
    ✓ should disallow uploading an image when there is an emergency stop (43ms)
    ✓ should emit a LogEmergencyStop event when performing an emergency stop

  17 passing (2s)
```

### To run solidity coverage.

Open a terminal and run `npm run coverage:solidity`.

```bash
$ npm run sol:coverage

> ipfs-image-app@0.1.0 coverage:solidity /Users/irvin/dev/ipfs-image-dapp
> solidity-coverage

Generating coverage environment
Running: truffle compile
(this can take a few seconds)...
Compiling ./contracts/ImageRegister.sol...
Compiling ./contracts/Migrations.sol...
Compiling openzeppelin-solidity/contracts/lifecycle/Destructible.sol...
Compiling openzeppelin-solidity/contracts/ownership/Ownable.sol...
Writing artifacts to ./build/contracts

Instrumenting  ./coverageEnv/contracts/ImageRegister.sol
Skipping instrumentation of  ./coverageEnv/contracts/Migrations.sol
Running: truffle compile
(this can take a few seconds)...
Compiling ./contracts/ImageRegister.sol...
Compiling ./contracts/Migrations.sol...
Compiling openzeppelin-solidity/contracts/lifecycle/Destructible.sol...
Compiling openzeppelin-solidity/contracts/ownership/Ownable.sol...
Writing artifacts to ./build/contracts

Launched testrpc on port 8555
Running: truffle test
(this can take a few seconds)...
Using network 'development'.

  Contract: ImageRegister
    ✓ has an owner
    ✓ should selfdestruct
    ✓ should store an image (134ms)
    ✓ should emit a LogImageUploaded event when storing an image (114ms)
    ✓ should return image details (162ms)
    ✓ should return image count (220ms)
    ✓ should store images for any number of owners (432ms)
    ✓ should require a valid IPFS hash when uploading an image (70ms)
    ✓ should require a valid title when uploading an image (72ms)
    ✓ should require a valid description when uploading an image (131ms)
    ✓ should require tags when uploading an image (88ms)
    ✓ should require a valid address when retrieving image count
    ✓ should require a valid index when retrieving image details (83ms)
    ✓ should allow the owner to perform an emergency stop
    ✓ should disallow a non-owner to perform an emergency stop
    ✓ should disallow uploading an image when there is an emergency stop (58ms)
    ✓ should emit a LogEmergencyStop event when performing an emergency stop (40ms)

  17 passing (3s)

--------------------|----------|----------|----------|----------|----------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------|----------|----------|----------|----------|----------------|
 contracts/         |      100 |    88.89 |    83.33 |      100 |                |
  ImageRegister.sol |      100 |    88.89 |    83.33 |      100 |                |
--------------------|----------|----------|----------|----------|----------------|
All files           |      100 |    88.89 |    83.33 |      100 |                |
--------------------|----------|----------|----------|----------|----------------|

Istanbul coverage reports generated
Cleaning up...
Shutting down testrpc-sc (pid 94037)
Done.
```

## Deploy to Rinkeby TestNet

Steps to deploy our smart contract directly from Truffle with Infura to the Rinkeby TestNet.

1.  Get an [Infura](https://infura.io/) API key. You can sign up for [free](https://infura.io/signup).
2.  Create a .env file in the root directory if it doesn't exist
    ```bash
    cd ipfs-image-dapp
    touch .env
    ```
3.  Update the .env file with your MetaMask mnenomic and Infura API Key
    ```javascript
    MNENOMIC = '<Your MetaMask recovery words>';
    INFURA_API_KEY = '<Your Infura API Key after its registration>';
    ```
4.  Deploy to Rinkeby with `truffle migrate --reset --compile-all --network rinkeby`

    ```bash
    $ truffle migrate --reset --compile-all --network rinkeby
    Compiling ./contracts/ImageRegister.sol...
    Compiling ./contracts/Migrations.sol...
    Compiling openzeppelin-solidity/contracts/lifecycle/Destructible.sol...
    Compiling openzeppelin-solidity/contracts/ownership/Ownable.sol...
    Writing artifacts to ./build/contracts

    Using network 'rinkeby'.

    Running migration: 1_initial_migration.js
      Deploying Migrations...
      ... 0xb2d3cebfca0c1a2e0d271c07740112460d82ce4469ba14d7b92f9993314af50c
      Migrations: 0x4ed3265ed135a4c85669f32ca662bd2aba3e5db3
    Saving successful migration to network...
      ... 0xde1d86d1efbeae9d086e0d1d170a20bbe1f570e92816d231265874f2a8afe556
    Saving artifacts...
    Running migration: 2_deploy_contracts.js
      Deploying ImageRegister...
      ... 0xcfbe99781c8c0cd77dd208eb445b2c12381704441e3827b2308a88d9c9b29079
      ImageRegister: 0x107aaa697293b44376de69ad4b87579e3b1e50d8
    Saving successful migration to network...
      ... 0x46ad7dbe55f412a55c76e48bf7553603c0826a19cda92f45f319699b8eb5a203
    Saving artifacts...
    ```

5.  Run the application as described above.

Check out the awesome tutorial [Deploy Your Smart Contract Directly from Truffle with Infura](https://medium.com/coinmonks/deploy-your-smart-contract-directly-from-truffle-with-infura-ba1e1f1d40c2) by Hyungsuk Kang.

## Troubleshooting Tips

- Is Ganache running?
- Is your MetaMask account unlocked?
- Are you using the MetaMask account associated with your Ganache account?
- Are you using your custom RPC network in MetaMask?
- If MetaMask can't find your RPC network, try switching to the Rinkeby Test Network and back.
- Did you `truffle compile` and `truffle migrate` whenever starting your local network or making changes to your smart contract?
- Transaction error?
  - Try resetting the MetaMask account you created under settings.
- Is `truffle migrate` showing stale settings?
  - Try `truffle migrate --reset`
- Images do not appear right away?
  - Have noticed on Mac that ganache-cli may drop transactions. Try using the Ganache app instead.
  - If you are using the Rinkeby TestNet, it may take up to a minute before the transaction is mined.

## Where can I find more documentation?

This application is a marriage of [Truffle](http://truffleframework.com/) and a React project created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start.

You can also check out the official sites for the [Ethereum Project](https://ethereum.org/), [OpenZeppelin](https://openzeppelin.org/) library and [IPFS](https://ipfs.io/).

## Host the UI on IPFS

There seem to be a number of issues hosting a `create-react-app` on IPFS. Take a look at the following links if you are interested in exploring this:

- [How to deploy/write React/Redux apps on IPFS](https://www.reddit.com/r/ipfs/comments/6ba9ck/how_to_deploywrite_reactredux_apps_on_ipfs/)
- [ipfs-webpack-plugin
  ](https://www.npmjs.com/package/ipfs-webpack-plugin) - IPFSWebpackPlugin is a plugin for webpack that makes it easy for you to load your generated assets via IPFS. It comes with a loader you can use instead of loading assets directly, and your assets will be loaded via the IPFS network instead.

## Future enhancements

- Add a visual indicator of the number of image uploads in-progress
- Improve web3 error handling, use React error boundaries
- Improve account change logic
  - Current logic is based on this article [Detecting Metamask account or network change in Javascript using Web3 1.0.0](https://medium.com/coinmonks/detecting-metamask-account-or-network-change-in-javascript-using-web3-1-0-0-18433e99df5a)
- Image upload wizard workflow
- Allow video uploads
- Allow update of image metadata e.g. title, description, tags
- Search / filter by tags

## Notes

This project uses [Bootstrap 4](https://getbootstrap.com/).

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# License

MIT

// "babel-core": "6.26.0",
// "babel-jest": "20.0.3",
// "babel-loader": "7.1.2",
// "babel-preset-react-app": "^3.1.1",
// "babel-runtime": "6.26.0",

    1_initial_migration.js

======================

# development

Deploying 'Migrations'

---

> transaction hash: 0xd1357a4c7f8721de1434c1e227665307a34c4bc08c49c2a3fcf5d270035182f1
> Blocks: 0 Seconds: 0
> contract address: 0x732afd7d45545fc96fdBD111b84A550D5cE24174
> block number: 24
> block timestamp: 1648791863
> account: 0x8c925DD848C8976650F0FF57e3C6B209349Ca983
> balance: 99.90176238
> gas used: 238594 (0x3a402)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00477188 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00477188 ETH

# 2_deploy_contracts.js

Deploying 'ImageRegister'

---

> transaction hash: 0xbf39370f9544ca58e8798f72f61ba5adb9c123e9e7eecabcd50609625c2e24df
> Blocks: 0 Seconds: 0
> contract address: 0x980953FDE9C6Dc0c71e670a5A8c0A132169798FC
> block number: 26
> block timestamp: 1648791869
> account: 0x8c925DD848C8976650F0FF57e3C6B209349Ca983
> balance: 99.87299388
> gas used: 1396077 (0x154d6d)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.02792154 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.02792154 ETH

# Summary

> Total deployments: 2
> Final cost: 0.03269342 ETH

# ropsten deploy

# Migrations dry-run (simulation)

> Network name: 'ropsten-fork'
> Network id: 3
> Block gas limit: 8000000 (0x7a1200)

# 1_initial_migration.js

Replacing 'Migrations'

---

> block number: 12153828
> block timestamp: 1648803147
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 1.958963271473622632
> gas used: 223594 (0x3696a)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.00223594 ETH

---

> Total cost: 0.00223594 ETH

# 2_deploy_contracts.js

Replacing 'ImageRegister'

---

> block number: 12153830
> block timestamp: 1648803170
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 1.944987021473622632
> gas used: 1370277 (0x14e8a5)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.01370277 ETH

---

> Total cost: 0.01370277 ETH

# Summary

> Total deployments: 2
> Final cost: 0.01593871 ETH

# Starting migrations...

> Network name: 'ropsten'
> Network id: 3
> Block gas limit: 8000000 (0x7a1200)

# 1_initial_migration.js

Replacing 'Migrations'

---

> transaction hash: 0x6ce1049ce8b315c251098cb51601a264dc7993e98dc206e640288c0c6717fa72
> Blocks: 1 Seconds: 37
> contract address: 0x61fB9B88F37CAA8c599C86c971e738c1ab118bF4
> block number: 12153829
> block timestamp: 1648803175
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 1.958800271473622632
> gas used: 239894 (0x3a916)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.00239894 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00239894 ETH

# 2_deploy_contracts.js

Replacing 'ImageRegister'

---

> transaction hash: 0xce682c39bc91546409efd843c7bb4c348227f511949cfb17315e841b7b6a85c9
> Blocks: 1 Seconds: 21
> contract address: 0x3C331052b5c7016A321e802902b1956840e29Fa2
> block number: 12153832
> block timestamp: 1648803235
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 1.944363021473622632
> gas used: 1397977 (0x1554d9)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.01397977 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01397977 ETH

# Summary

> Total deployments: 2
> Final cost: 0.01637871 ETH

# Binance deploy

# Starting migrations...

> Network name: 'testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x07cc6b69a6ff69b8118e993d728e1c7a68e7b65fea43baefa38e2367f02d8720
> Blocks: 3 Seconds: 9
> contract address: 0xD8381221EFa382F46AB6fcaE1186Ca1AEC97a6C2
> block number: 18065667
> block timestamp: 1648803990
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 0.99761406
> gas used: 238594 (0x3a402)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.00238594 ETH

Pausing for 10 confirmations...

---

> confirmation number: 2 (block: 18065670)
> confirmation number: 3 (block: 18065671)
> confirmation number: 4 (block: 18065672)
> confirmation number: 6 (block: 18065674)
> confirmation number: 7 (block: 18065675)
> confirmation number: 8 (block: 18065676)
> confirmation number: 10 (block: 18065678)

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00238594 ETH

# 2_deploy_contracts.js

Deploying 'ImageRegister'

---

> transaction hash: 0x75d16422a06ca712918bbc84e3a647070f3086fb40caaec58db72dd24fbaff29
> Blocks: 3 Seconds: 9
> contract address: 0x1F03fEB489b31A284C648261559AD84362037E0C
> block number: 18065686
> block timestamp: 1648804047
> account: 0x8a8D25de5187CFEfe8FbafE2517A1cCbeA35E030
> balance: 0.98322981
> gas used: 1396077 (0x154d6d)
> gas price: 10 gwei
> value sent: 0 ETH
> total cost: 0.01396077 ETH

Pausing for 10 confirmations...

---

> confirmation number: 1 (block: 18065689)
> confirmation number: 3 (block: 18065691)
> confirmation number: 4 (block: 18065692)
> confirmation number: 5 (block: 18065693)
> confirmation number: 6 (block: 18065694)
> confirmation number: 8 (block: 18065696)
> confirmation number: 9 (block: 18065697)
> confirmation number: 10 (block: 18065698)

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01396077 ETH

# Summary

> Total deployments: 2
> Final cost: 0.01634671 ETH
