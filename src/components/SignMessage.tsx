import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"

export default function SignMessage() {
    const [msg, setMsg] = useState<string>();

    const { signMessage } = useWallet();

    async function sign() {
        if(!signMessage) return;

        const message = new TextEncoder().encode(msg);
        const signature = await signMessage(message);
        
        // at backend
        // decrypt signature using public key that is sent
        // compare message and decrypted signature

        alert(`Signature - ${signature}`);
    
    }

    return <div className="flex flex-col items-center gap-3 border border-gray-700 rounded-2xl p-2">
        <div>Sign Message</div>

        <input type="text" placeholder="Message..." onChange={(e) => setMsg(e.target.value)} className="border border-gray-700 p-1 rounded-lg" />

        <button className="bg-gray-600 p-2 rounded-md cursor-pointer" onClick={sign}>Sign Message</button>
    </div>
}