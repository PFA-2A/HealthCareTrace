import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from "next/image"
import image from "../images/bg30.jpeg"
import AddbatchContainer from '../components/Addbatch/AddbatchComponent'
import cookieCutter from 'cookie-cutter';
import {useRouter} from 'next/router'
import getWallet from '../client/wallet/getWallet.js'

function addbatch() {
  const router = useRouter();
<<<<<<< HEAD
=======
  const { connected } = getWallet()
  /*if (connected ) {
    cookieCutter.set('wallet', connected);
    router.push('/signup');
  } else {
    document.cookie = 'wallet=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem("wallet");
    sessionStorage.removeItem("wallet");
    router.push("/connectTowallet"); 
  }*/
>>>>>>> 2a626b6b0f89844498b39201384636979a70b68c
  return (
    <div>
        <Navbar/>
        <Image
                src={image}
                quality="100"
                layout="fill"
        />
        <AddbatchContainer/>
    </div>
  )
}

export default addbatch