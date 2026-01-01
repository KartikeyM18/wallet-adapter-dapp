import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function Balance(){
    const wallet = useWallet();
    const {connection} = useConnection();

    const [bal, setBal] = useState<number>(0);
    
    async function getBal(){
        const publicKey = wallet.publicKey;
        if(!publicKey) return;
        const bal = await connection.getBalance(publicKey);
        setBal(bal/LAMPORTS_PER_SOL);
    }

    useEffect(()=>{
        getBal();
    }, [wallet]);
    
    return <div className="text-center">
        <div>Balance {bal}</div>
    </div>
}