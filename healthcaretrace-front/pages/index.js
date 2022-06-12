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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        { connected ? (
          <UseWebsite/>
        ) : (
        <ConnectWallet/>
        ) }
      </body>
    </div>
  )
}
