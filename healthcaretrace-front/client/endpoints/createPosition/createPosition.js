StrictMode

import * as anchor from '@project-serum/anchor';
import { StrictMode } from 'react';
import getProgramInstance from "../../utils/utils"
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../../utils/const'
import { getCookie } from 'cookies-next';

const { SystemProgram } = anchor.web3;

const defaultAccounts = {
    tokeProgram : TOKEN_PROGRAM_ID,
    clock : anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram : SystemProgram.programId,
  }


const CreatePosition = async (name, description, role = "", wallet) => {

    /*const connection = new anchor.web3.Connection(SOLANA_HOST, 'confirmed');
    const program = getProgramInstance(connection, wallet);
    const payer = anchor.web3.Keypair.generate();

    const positionAccount = anchor.web3.Keypair.generate();*/

    alert(wallet.publicKey);

    /*await connection.confirmTransaction(airdropSignature);

    alert(wallet.publicKey)

    /*await program.rpc.createPosition(
        name,
        description, {
            accounts: {
                position: wallet.publicKey,
                authority: payer.publicKey,
                ...defaultAccounts
            },
            signers : [ wallet.publicKey]
        }
    )

    const account = await program.account.positionAccount.fetch(positionAccount.publicKey);
    alert(account);*/
}

export default CreatePosition;