import Head from 'next/head'
import Image from 'next/image'
import getWallet from '../client/wallet/getWallet.js'
import ConnectWallet from '../components/connectwallet/connectwallet.js'
import UseWebsite from '../components/UseWebsite.js'

export default function LogToWebsite() {
  const { connected } = getWallet()
  return (
    <div>
      <Head>
        <title>Health Care Trace</title>
        <meta name="description" content="Trace medical product in the blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { connected ? (
        <UseWebsite/>
      ) : (
        <ConnectWallet/>
      ) }
    </div>
  )
}
