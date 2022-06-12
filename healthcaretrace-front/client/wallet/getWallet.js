import { useWallet } from '@solana/wallet-adapter-react'


export default () => {
    const { connected } = useWallet()
    return { connected };
}