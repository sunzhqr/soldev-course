import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function fetchBalance(){
const publicKey = new PublicKey("EqhemV6bB2KQupxe9nfxXCbXqGaDdNfb8wHk3rsk7jTa");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// @ts-ignore
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`)
}

fetchBalance().catch((error) => console.error(error))