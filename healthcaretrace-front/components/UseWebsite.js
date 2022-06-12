import React from 'react'
import CreateUser from './createuser/CreateUser'
import Home from './Home'
import { useEffect, useState } from 'react'
import getUseWebsite from '../client/createuser/UseWebsite';

const UseWebsite = () => {
  
  const [isAccount, setAccount] = useState(false)
  const {wallet, connection, program, signup} = getUseWebsite();
  
  return (
    <>
      { isAccount ? (
        <div>
          <Home/>
        </div>
      ) : (
          <CreateUser createuser = { signup } wallet = { wallet.publicKey.toBase58() }/>
      ) }
    </>
  )
}

export default UseWebsite