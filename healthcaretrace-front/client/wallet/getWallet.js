import { useWallet } from '@solana/wallet-adapter-react'
import * as anchor from '@project-serum/anchor'


const getWallet = () => {
    const provider = anchor.Provider.env();
    anchor.setProvider(provider);
    return provider.wallet;
}


export default useWallet;