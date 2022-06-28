import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Container from '../components/Container.js'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Kristina Groeger - Web Developer & Designer</title>
        <meta name="🤡" content="Tricks and Treats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="container">
        <h1>Web Developer<br></br>
          &amp; Designer.</h1>
      </div>
      <Container></Container>

    </div>
  )
}

