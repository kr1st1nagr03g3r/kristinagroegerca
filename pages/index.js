import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Container from '../components/Container'
import Hero from '../components/Hero'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Kristina Groeger - Web Developer & Designer</title>
        <meta name="🤡" content="Tricks and Treats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero>
        <h1>Web Developer<br></br>
          &amp; Designer.</h1>
        <p>Dolore magna id culpa dolore dolor do magna enim laboris eiusmod sint. Laboris cillum sit culpa ullamco minim adipisicing in quis laboris sint magna. Dolore laborum exercitation dolore sunt anim duis anim sint eiusmod fugiat sint. Labore reprehenderit officia culpa deserunt consequat mollit in non est.</p>
      </Hero>
      <Container>
        <h2>Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.</h2>
        <p>Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur incididunt deserunt enim adipisicing ut cupidatat elit est labore officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat excepteur minim ipsum aliqua incididunt et laborum culpa ut.</p>
      </Container>

    </div>
  )
}

