import { createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID } from "@solana/spl-token"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export default function TokenLaunchpad() {

    const wallet = useWallet();
    const { connection } = useConnection();

    // createMint()
    async function createTokenMint() {
        const decimals = 9;

        if(!wallet.publicKey) return;
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        
        const mintKeypair = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID
            }),
            createInitializeMint2Instruction(mintKeypair.publicKey, decimals, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID)
        )

        transaction.feePayer = wallet.publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.partialSign(mintKeypair);

        const response = await wallet.sendTransaction(transaction, connection);
        console.log(response);
        alert(`Token mint created at ${mintKeypair.publicKey}`);
    }

    return <div className="flex flex-col items-center gap-3 border border-gray-700 rounded-2xl p-2">
        <div>Token</div>

        <input type="text" placeholder="Name" className="border border-gray-700 p-1 rounded-lg" />

        <button className="bg-gray-600 p-2 rounded-md cursor-pointer" onClick={createTokenMint}>Launch Token</button>
    </div>
}