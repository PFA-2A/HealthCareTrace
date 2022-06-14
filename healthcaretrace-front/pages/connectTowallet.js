import Head from 'next/head'
import Image from 'next/image'
import getWallet from '../client/wallet/getWallet.js'
import ConnectWallet from '../components/connectwallet/connectwallet.js'
import UseWebsite from '../components/UseWebsite.js'
import { setCookies } from "cookies-next";
import {useRouter} from 'next/router'

export default function LogToWebsite() {
  const router = useRouter();
  const { connected } = getWallet()
  if (connected ) {
    setCookies("connected",  connected);
    router.push('/signup');
  }
  return (
    <div>
      <Head>
        <title>Health Care Trace</title>
        <meta name="description" content="Trace medical product in the blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectWallet/>
    </div>
  )
}
