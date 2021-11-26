const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const fs = require("fs");
const ed = require("@noble/ed25519");
const privateKey = fs.readFileSync(argv.nodeKeyFile).toString("hex");
const msgHash = argv.msg;

(async () => {
    const signature = await ed.sign(msgHash, privateKey);
    console.log("Signature: " + signature);
})();
