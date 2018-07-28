// /* global web3:true */

import contract from 'truffle-contract';

// import artifacts
import casinoArtifacts from '../../../build/contracts/Casino.json';

// create contracts
const Betting = contract(casinoArtifacts);

export {
  Betting,
};
