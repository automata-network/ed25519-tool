const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const PeerId = require("peer-id");
const ed = require("@noble/ed25519");
const msgHash = argv.msg;
const signature = argv.sig;
const peerId = argv.pk;

(async () => {
    const publicKey = PeerId.parse(peerId).marshalPubKey().toString("hex").substr(8);
    const isSigned = await ed.verify(signature, msgHash, publicKey);
    console.log("Valid: " + isSigned);
})();
