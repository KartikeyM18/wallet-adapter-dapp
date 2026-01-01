import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './components/RequestAirdrop';
import Balance from './components/Balance';

function App() {

    return (
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className='bg-black text-white h-screen flex justify-center items-center flex-col gap-10'>

                        <div className='flex flex-col '>
                            <WalletMultiButton />
                            <WalletDisconnectButton />

                        </div>
                        <div className='flex flex-col gap-5'>
                            <RequestAirdrop />
                            <Balance />
                        </div>
                    </div>

                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default App
