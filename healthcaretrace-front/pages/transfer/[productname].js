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
  const { connected } = getWallet()
  if (connected ) {
    cookieCutter.set('wallet', connected);
    router.push('/signup');
  } else {
    document.cookie = 'wallet=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem("wallet");
    sessionStorage.removeItem("wallet");
    router.push("/connectTowallet"); 
  }
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