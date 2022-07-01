# L2 Polling Contract

L2 version of https://github.com/makerdao/symbolic-voting

Allows for voting in polls on L2. Casting a vote emits a `Voted` event just like the event emitted by the L1 polling contracts. There are two `vote` functions in this contract: the first function records the msg.sender as the voter, and the second function enables gasless voting by recording the signer of the signature as the voter. Signatures are expected to follow the EIP-712 standard.

In the future we will likely stop using the L1 polling contract for poll creation, and switch to this L2 contract. The `npoll` variable is set to a high number so as to avoid poll number collision with the mainnet polling contract. The `PollCreated` and `PollWithdrawn` events emitted are just like the events emitted from the mainnet polling contract.

L1 polling contracts:
gitub repo: https://github.com/makerdao/symbolic-voting
batch polling contract: https://etherscan.io/address/0xD3A9FE267852281a1e6307a1C37CDfD76d39b133#code
original polling contract: https://etherscan.io/address/0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D#code

### Deployment

The following command deploys the contract to the arbitrum network, using the details found in the hardhat.config file
```
npx hardhat run --network arbitrum scripts/run.js
```

### Addresses

ArbRinkeby: https://testnet.arbiscan.io/address/0xc5C7bC9f0F54f2F6c441A774Ef93aCf06cE3DfA3#code