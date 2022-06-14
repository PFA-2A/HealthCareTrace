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