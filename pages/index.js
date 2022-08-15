import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Tab } from '@headlessui/react'
import Navbar from '../components/navbar'
import { useState } from 'react'
import Listing from '../components/nikeListing'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nike Air Jordan Retroes Collection Campaign | MVRNFT</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      </Head>
      <Navbar/>
      <Header />
      <Listing />
    </div>
  )
}