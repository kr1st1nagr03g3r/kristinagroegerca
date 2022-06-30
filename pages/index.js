import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Animations.module.css'
import Navigation from '../components/Navigation'
import Container from '../components/Container'
import Hero from '../components/Hero'
import { useInView } from 'react-intersection-observer';



export default function Home() {
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
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
        <p>Idk wtf to say here
        Kristina is a UI and UX developer &amp; designer who has pushed pixels and made web products since 2012. 
        I&apos;ve spent a large amount of that time working on various CMS&apos;s, primarily Adobe Experience Manager.
      </p>
      </Hero>
      <Container>
        <h3 >Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.</h3>
        <p>Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur incididunt deserunt enim adipisicing ut cupidatat elit est labore officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat excepteur minim ipsum aliqua incididunt et laborum culpa ut.</p>

      </Container>
      <Container>
        <h3>Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.</h3>
        <p>Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur incididunt deserunt enim adipisicing ut cupidatat elit est labore officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat excepteur minim ipsum aliqua incididunt et laborum culpa ut.</p>
      </Container>
      <Container>
      <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
                            🚀
                        </span>
        <h3 ref={magicSectionRef}>Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.</h3>
        <p>Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur incididunt deserunt enim adipisicing ut cupidatat elit est labore officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat excepteur minim ipsum aliqua incididunt et laborum culpa ut.</p>
      </Container>

    </div>
  )
}

