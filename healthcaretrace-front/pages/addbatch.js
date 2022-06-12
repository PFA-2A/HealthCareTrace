import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from "next/image"
import image from "../images/bg30.jpeg"
import AddbatchContainer from '../components/Addbatch/AddbatchContainer'

function addbatch() {
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