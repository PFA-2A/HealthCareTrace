import { ConnectionProvider, WalletProvider, } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useMemo } from 'react'
import { clusterApiUrl } from '@solana/web3.js'
import getWalletConnectionProvider from '../client/context/WalletConnectionProvider'

const WalletConnectionProvider = ({children}) => {

    const {_endpoint, _wallets, ConnectionProvider, WalletProvider, WalletModalProvider} = getWalletConnectionProvider();
    const endpoint = useMemo(_endpoint, [])
    const wallets = useMemo(_wallets, [])
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider