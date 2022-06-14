StrictMode

import * as anchor from '@project-serum/anchor';
import { StrictMode } from 'react';
import getProgramInstance from "../utils/utils"
import getWallet from '../wallet/getWallet';


const CreatePosition = (name, description, role, authorityPubkey) => {

    const connection = new anchor.web3.Connection(SOLANA_HOST, 'confirmed');
    const wallet = getWallet();
    const program = getProgramInstance(connection, wallet);
}

export default CreatePosition;