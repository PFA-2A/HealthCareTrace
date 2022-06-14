import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Image from 'next/image'
import image from '../../images/Blockchain.jpg'
import TransferController from '../../components/Transfer/TransferComponent.js'
import cookieCutter from 'cookie-cutter';
import {useRouter} from 'next/router'
import getWallet from '../client/wallet/getWallet.js'

const transferproduct = () => {
  const router = useRouter();
  return (
    <div>
        <Navbar/>
        <Image
                src={image}
                quality="100"
                layout="fill"
        />
        <TransferController/>
    </div>
  )
}

export default transferproduct