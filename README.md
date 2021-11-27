## Ed25519 Tool

### How to use

#### 1. Install [Node.js](https://nodejs.org/)
#### 2. Get this repo
+ Option1: download zip `ed25519-tool.zip` in the release page
+ Option2: run `git clone https://github.com/automata-network/ed25519-tool.git`
#### 3. Go to project folder
+ Run `cd ed25519-tool`
#### 4. Get dependencies
+ Run `npm install`
#### 5. Sign
+ Run `node ./sign.js --nodeKeyFile=<path to your private key> --msg=<your wallet address without 0x prefix>`
+ Example: `node ./sign.js --nodeKeyFile=/chains/contextfree_network/network/secret_ed25519 --msg=8f05eB0ff09BE20F70BBdc71d523B75Dc21e9aBe`
+ You will get signature in console like `Signature: f9fc7678dda60d87ede3b1df490c4d69159d538a61c8e7d5bb78f6ab50523b6baa0ccb3b5e9c82b22bb1ba5b16b90e7978ffd59c29757d96bd65213f6621ad07`
#### 6. Verify
+ Run `node ./verify.js --msg=<your wallet address without 0x prefix> --sig=<your signature> --peerId=<your peerId>`
+ Example: `node ./verify.js --msg=8f05eB0ff09BE20F70BBdc71d523B75Dc21e9aBe --sig=f9fc7678dda60d87ede3b1df490c4d69159d538a61c8e7d5bb78f6ab50523b6baa0ccb3b5e9c82b22bb1ba5b16b90e7978ffd59c29757d96bd65213f6621ad07 --peerId=12D3KooWNKPSkMjBTTqpEKFv7oj91qzqoXPp1SrpdUAuvFcBkQe2`
+ See result in console like `Valid: true(or false)`
