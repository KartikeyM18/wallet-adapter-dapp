import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import RequestAirdrop from './components/RequestAirdrop';
import Balance from './components/Balance';
import SendSol from './components/SendSol';
import SignMessage from './components/SignMessage';

function App() {

    return (
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className='bg-black text-white min-h-screen flex justify-center items-center flex-col gap-10'>

                        <div className='flex flex-col '>
                            <WalletMultiButton />
                            <WalletDisconnectButton />

                        </div>
                        <div className='flex flex-col gap-5'>
                            <RequestAirdrop />
                            <Balance />
                            <SendSol />
                            <SignMessage />
                        </div>
                    </div>

                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default App
