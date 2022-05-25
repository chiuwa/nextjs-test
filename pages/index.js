import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProductCarousel from '../components/ProductCarousel'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic"


const NextJsCarousel = dynamic(() => import("../components/Carousel"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.container_f}>
      <Head>
        <title>De S&V NextJs </title>
        <meta name="description" content="nodejs web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Navbar/>
      <main className={styles.container_f}>
      <NextJsCarousel/>
      </main>
      <div className={styles.container}>
      <Banner/>
      <ProductCarousel/>
      </div>

    </div>
  )
}
