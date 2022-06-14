import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'


export default () => {

    const _endpoint = () => clusterApiUrl('devnet')
    const _wallets = () => [new PhantomWalletAdapter()]
    return {_endpoint, _wallets, ConnectionProvider, WalletProvider, WalletModalProvider};
}