import * as anchor from '@project-serum/anchor'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { HEALTHCARETRACE_IDL, HEALTHCARETRACE_PROGRAM_ID} from './const'

export default function(connection, wallet) {
    if (!wallet.publicKey) throw new WalletNotConnectedError()

    const provider = new anchor.AnchorProvider(
        connection, 
        wallet,
        anchor.AnchorProvider.defaultOptions(),
    );

    const idl = HEALTHCARETRACE_IDL
    const programid = HEALTHCARETRACE_PROGRAM_ID

    const program = new (anchor).Program(idl, programid, provider)

    return program 
} 
