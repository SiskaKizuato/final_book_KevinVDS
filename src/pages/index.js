import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Join from '@/components/Join/Join'
import SaleUp from '@/components/SaleUp/SaleUp'
import Popular from '@/components/Popular/Popular'
import Navbar from '@/components/Navbar/Navbar'
import Carousel from '@/components/Carousel/Carousel'
import Test from '@/components/Test/Test'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchDarkMode } from '@/features/darkMode/darkModeSlice'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch=useDispatch();
  const darkMode=useSelector((state)=>state.darkMode.value)

  function toggleMode() {
    dispatch(switchDarkMode())
  }

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        <title>FinalBook</title>
        <link rel="icon" href="/fav2.png" />
      </Head>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Carousel darkMode={darkMode} />
      <SaleUp darkMode={darkMode} />
      <Popular darkMode={darkMode} />
      <Join darkMode={darkMode} />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
    </>
  )
}
