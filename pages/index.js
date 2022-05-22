import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from '../components/Carousel'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container_f}>
      <Head>
        <title>De S&V NextJs </title>
        <meta name="description" content="nodejs web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Navbar></Navbar>
   
      <main className={styles.container_f}>
      <Carousel></Carousel>
      </main>
    </div>
  )
}
