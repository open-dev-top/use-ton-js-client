import "dotenv/config";
import "buffer";
import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV5R1 } from "@ton/ton";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = process.env.MNEMONIC!; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  // console.log(mnemonic.split(" ")); // check your 24 secret words don't have extra space or /n
  const wallet = WalletContractV5R1.create({
    publicKey: key.publicKey,
    workchain: 0,
  });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();
