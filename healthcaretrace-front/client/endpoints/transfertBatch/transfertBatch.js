import { useWallet } from '@solana/wallet-adapter-react'
import { SOLANA_HOST } from '../utils/const'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import useAccount from '../hooks/useAccount'
import getProgramInstance from "../utils/utils"

const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const {BN, web3} = anchor
const { SystemProgram } = web3
const defaultAccounts = {
  tokeProgram : TOKEN_PROGRAM_ID,
  clock : anchor.web3.SYSVAR_CLOCK_PUBKEY,
  SystemProgram : SystemProgram.programId,
}

export default transferBatch;

const transferBatch = (PkFrom, PkTo, batchPk)  => {
  const connection = new anchor.web3.Connection(SOLANA_HOST)

  const program = getProgramInstance(connection, wallet)

  const storedBatchAccount = anchor.web3.Keypair.generate();

    await program.rpc.createUser(
        name,
        secret,{
            accounts: {
                storedBatch: storedBatchAccount.publicKey,
                batch: batchPk,
                oldPosition: PkFrom,
                newPosition: PkTo,
                authority: wallet.publicKey,
                position: positionPK,
                ...defaultAccounts
            }
        }
    )
  
}