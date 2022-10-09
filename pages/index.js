import Head from 'next/head'
import styles from '../styles/animatedAssets/Animations.module.css'
import Navigation from '../components/Navigation'
import { useInView } from 'react-intersection-observer'
import { Container } from '@mui/system'
import Hero from '../components/Hero'
import CardsHome from '../components/CardsHome'
import womanWorking from '../public/woman-working-kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg'
import Starfield from '../components/animatedAssets/Starfield'
import Clientele from '../components/Clientele'
import { Box } from '@mui/material'

export default function Home() {
  // Scroll Event Listener
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView()

  return (
    <>
      <Head>
        <title>Kristina Groeger - Web Developer & Designer</title>
        <meta name="🤡" content="Tricks and Treats" />
        <link rel="icon" href="/bitten-apple.png" type="image/png" />
      </Head>

      <Navigation />

      <Hero />

      <Starfield />

      <Clientele />

      <CardsHome></CardsHome>

      <Container>
        {/* <h2 className="bold center">Projects</h2>
        <Card>
          <span
            sx={{
              borderRadius: '50px',
            }}
          >
            <Image
              src={Images.petwatch}
              alt="A desk showing a desktop Mac and the 24Petwatch website"
            />
          </span>
          <h3>A major migragion from Drupal into AEM Cloud</h3>
          <p className="sans-serif">
            Front-end rebrands and migration projects via AEM Cloud templates,
            theming, components, authoring, policies / policy creation for
            24Petwatch.com, 24Petcare.com, and 24Pet.com
          </p>
        </Card>
        <Card>
          <Image src={womanWorking} alt="a woman typing on a macbook"></Image>
          <h3>
            Aute Lorem adipisicing ad ea amet laboris occaecat sint esse
            excepteur aute.
          </h3>
          <p>
            Sint aliquip laborum excepteur sunt pariatur enim eiusmod amet
            ipsum.
          </p>
        </Card>
        <p>
          <small>
            Consectetur enim aute et magna duis non enim duis do proident dolor
            proident consequat occaecat. Ullamco sint aliquip ipsum cillum id do
            do anim laboris ut sint ipsum. Ut ullamco nostrud magna cillum.
          </small>
        </p>
        <h4>
          Reprehenderit nisi mollit cupidatat commodo aliqua consequat ut.
        </h4>
        <h5>
          Reprehenderit nisi mollit cupidatat commodo aliqua consequat ut.
        </h5> */}
        <span
          className={`${styles.rocket} ${
            magicSectionIsVisible ? styles.animateRocket : ''
          }`}
        >
          🚀
        </span>
        <h3 ref={magicSectionRef}>
          Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.
        </h3>
        <p>
          Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur
          incididunt deserunt enim adipisicing ut cupidatat elit est labore
          officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident
          est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat
          excepteur minim ipsum aliqua incididunt et laborum culpa ut.
        </p>
      </Container>
    </>
  )
}
