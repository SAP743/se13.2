import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import InvestView from '@/views/invests'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <InvestView />
  )
}

export default Home
