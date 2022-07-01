import Head from 'next/head'
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
      <p className="text-top">Hello, there. I&apos;m Kristina. 👋🏻 </p>
        <h1>Creative<br></br>
          Developer.</h1>
        <p> I&apos;m a UI / UX developer & designer with over 10 years of experience. 
       
        I build human-centered digital experiences with a focus on accessibility. 
        
       I have experience working on interaction-design, consise documentation, solution-based communication, digital illustration & animation, and content creation.
        
       {/* <button> I&apos;m currently open to job opportunities.</button> */}
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

