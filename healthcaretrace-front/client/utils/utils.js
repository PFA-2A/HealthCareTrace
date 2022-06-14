import * as anchor from '@project-serum/anchor'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { HEALTHCARETRACE_IDL, HEALTHCARETRACE_PROGRAM_ID} from './const'
import { useRouter } from 'next/router'

export default function(connection, wallet) {

    const provider = new anchor.AnchorProvider(
        connection, 
        wallet,
        anchor.AnchorProvider.defaultOptions(),
    );

    const idl = HEALTHCARETRACE_IDL
    const programid = HEALTHCARETRACE_PROGRAM_ID

    const program = new (anchor).Program(idl, programid)

    return program 
} 
