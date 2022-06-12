import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from 'next/image'
import image from '../images/Blockchain.jpg'
import TransferController from '../components/Transfer/TransferController.js'

const transfer = () => {
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

export default transfer