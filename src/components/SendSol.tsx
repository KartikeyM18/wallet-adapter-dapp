import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export default function SendSol() {
    const [to, setTo] = useState<string>();
    const [amt, setAmt] = useState<number>();

    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    async function sendSol() {
        if (!publicKey || !to || !amt) return;

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(to),
                lamports: amt * LAMPORTS_PER_SOL
            })
        )

        await sendTransaction(transaction, connection);
        alert(`Sent ${amt} SOL to ${to}`);


    }

    return <div className="flex flex-col items-center gap-3 border border-gray-700 rounded-2xl p-2">
        <div>Transaction</div>

        <input type="text" placeholder="To..." onChange={(e) => setTo(e.target.value)} className="border border-gray-700 p-1 rounded-lg"/>
        <input type="text" placeholder="Amount..." onChange={(e) => setAmt(Number(e.target.value))} className="border border-gray-700 p-1 rounded-lg"/>

        <button className="bg-gray-600 p-2 rounded-md cursor-pointer" onClick={sendSol}>Send</button>

    </div>
}