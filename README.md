# Decentralized Lottery - Backend

## Introduction

Welcome to the backend of the "Decentralized Lottery" project, a decentralized platform that allows users to participate in a lottery using smart contracts. The platform is built using Solidity, a smart contract programming language, and the Hardhat development environment, along with JavaScript and Ethers.js. The platform is designed to be secure, transparent, and fair, with all transactions recorded on the blockchain.

The project includes a demo that can be accessed at "https://delotterize.de" and the smart contract is live on the Goerli test network, using test money only. The project includes both unit tests and staging tests, ensuring that the smart contract has been thoroughly tested before deployment. The platform has been created with the goal of making lottery participation easier and more accessible to everyone, and the smart contract is open-source and can be freely audited by the community.

If you're interested in participating in the lottery or just want to learn more about the project, please take a look at the rest of the README file for more information on how to set up the project and start using it. Thank you for your interest!



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

<a href="https://hardhat.org">Hardhat</a></br>
<a href="https://docs.ethers.org">Ethers.js</a>


## Getting Started

### Prerequisites

Run yarn to install all the necessary node modules first:
  ```sh
  yarn
  ```
  
The following tasks will get you started with compiling, testing, and deploying the smart contract:

```shell
yarn hardhat compile
yarn hardhat deploy --network goerli
yarn hardhat test
REPORT_GAS=true yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.js
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>
