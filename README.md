## Crypto Tool

### How to use

#### 1. Install [Node.js](https://nodejs.org/)
#### 2. Get this repo
+ Download zip or run `git clone https://github.com/automata-network/crypto-tool.git`
#### 3. Go to project folder
+ run `cd crypto-tool`
#### 4. Get dependencies
+ run `npm install`
#### 5. Sign
+ run `node ./sign.js --sk=<path to your private key> --msg=<your wallet address>`
+ You will get signature in console like `Signature: f9fc7678dda60d87ede3b1df490c4d69159d538a61c8e7d5bb78f6ab50523b6baa0ccb3b5e9c82b22bb1ba5b16b90e7978ffd59c29757d96bd65213f6621ad07`
#### 6. Verify
+ run `node ./verify.js --msg=<your wallet address> --sig=<your signature> --pk=<your peerId>`
+ See result in console like `Valid: true(or false)`
