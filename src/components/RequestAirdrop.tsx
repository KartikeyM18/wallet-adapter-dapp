import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function RequestAirdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();
    const [amt, setAmt] = useState<number>();

    function getSol(){
        const publicKey = wallet.publicKey;
        console.log(amt);
        if(!publicKey || !amt) return;
        connection.requestAirdrop(publicKey, amt*LAMPORTS_PER_SOL);
        alert('done');
    }

    return <div className="flex flex-col items-center gap-3">
        <div>
            Airdrop
        </div>
        <input type="text" placeholder="Amount" className="border border-white p-1"  onChange={(e)=>setAmt(Number(e.target.value))}/>

        <button className="bg-gray-600 p-2 rounded-md cursor-pointer" onClick={getSol}>Get SOL</button>

    </div>
}