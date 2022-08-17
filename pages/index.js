import Head from 'next/head'
import styles from '../styles/animatedAssets/Animations.module.css'
import Navigation from '../components/Navigation'
import { useInView } from 'react-intersection-observer';
import { Container } from '@mui/system';
import Hero from '../components/Hero';
import Card from '../components/Card'
import Image from 'next/image';
import womanWorking from '../public/woman-working-kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg'
import Starfield from '../components/animatedAssets/Starfield'
import createScrollSnap from 'scroll-snap'



export default function Home() {

  // Scroll Event Listener
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();




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

      <Container className="flex row">
        <h2>Minim aliqua eiusmod minim labore sunt irure dolor sit occaecat et.</h2>
        <Card>
          <Image src={womanWorking} alt="a woman typing on a macbook"></Image>
          <h3>Aute Lorem adipisicing ad ea amet laboris occaecat sint esse excepteur aute.</h3>
          <p>
            Sint aliquip laborum excepteur sunt pariatur enim eiusmod amet ipsum.
          </p></Card>
        <Card>
          <Image src={womanWorking} alt="a woman typing on a macbook"></Image>
          <h3>Aute Lorem adipisicing ad ea amet laboris occaecat sint esse excepteur aute.</h3>
          <p>
            Sint aliquip laborum excepteur sunt pariatur enim eiusmod amet ipsum.
          </p></Card>
        <p><small>Consectetur enim aute et magna duis non enim duis do proident dolor proident consequat occaecat. Ullamco sint aliquip ipsum cillum id do do anim laboris ut sint ipsum. Ut ullamco nostrud magna cillum.</small></p>
        <h4 >Reprehenderit nisi mollit cupidatat commodo aliqua consequat ut.</h4>
        <h5>Reprehenderit nisi mollit cupidatat commodo aliqua consequat ut.</h5>
        <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
          🚀
        </span>
        <h3 ref={magicSectionRef}>Id aliqua magna esse sunt. Aliqua officia enim veniam pariatur.</h3>
        <p>Incididunt sunt pariatur in velit Lorem eiusmod non. Consectetur incididunt deserunt enim adipisicing ut cupidatat elit est labore officia sint in ipsum enim. Mollit enim quis ea mollit dolor proident est veniam tempor nisi deserunt. Voluptate id voluptate amet cupidatat excepteur minim ipsum aliqua incididunt et laborum culpa ut.</p>
      </Container>

      <Container>
        <div className="scroller">
          <div>
            <h2>Veniam tempor minim reprehenderit nostrud nostrud sint ullamco. Eiusmod veniam sit pariatur magna est non culpa. Dolore quis in fugiat est mollit nostrud. Anim velit incididunt excepteur magna cillum consequat minim. Incididunt laboris minim non elit laboris ad elit sit cillum voluptate est laboris ex. Voluptate officia occaecat ea tempor irure sint aliquip aliqua. Ea nulla consequat consequat Lorem in nostrud irure minim.

              Deserunt mollit aliquip irure sint eu laborum tempor ea laborum laborum reprehenderit ut est. Amet aute elit labore sit consequat nisi consectetur. Ad aliqua proident magna sint ut cillum aliqua incididunt. Nulla non esse ea nisi eiusmod et veniam elit officia velit Lorem et.

              Laborum pariatur irure officia laborum aliqua magna sunt ex. Esse duis ut aliqua id aliquip cupidatat nulla. Laboris adipisicing velit culpa Lorem anim Lorem aliqua in reprehenderit sunt duis consectetur elit exercitation. Aute in fugiat consectetur amet nisi non incididunt. Exercitation proident consectetur nisi ad nisi quis veniam. Aliquip nisi cillum incididunt eu excepteur adipisicing officia non. Pariatur Lorem et eu occaecat do.</h2>
          </div>
          <div>
            <h2>Duis ut culpa minim tempor incididunt pariatur occaecat. Nulla Lorem cupidatat ipsum officia do labore anim reprehenderit eu mollit. Tempor consectetur laboris qui magna laboris pariatur in magna consequat sunt ex.

              Excepteur exercitation ipsum sunt incididunt irure culpa Lorem. Anim tempor eiusmod amet anim consectetur. Commodo irure nulla enim culpa ex in laboris ea eu deserunt mollit anim aliquip. Velit esse ex tempor magna quis nostrud.</h2>
          </div>
          <div>
            <h2>Id ea proident elit do veniam mollit deserunt velit sint veniam veniam. Elit excepteur sit nisi eiusmod qui eu voluptate. Aute incididunt sint anim sint proident ex exercitation qui velit elit proident magna.

              Aliqua ea reprehenderit ullamco ullamco ad minim dolor est qui minim id cupidatat. Occaecat ullamco aute ea elit magna enim et dolor elit incididunt incididunt ea. Labore cupidatat eiusmod et amet cupidatat officia tempor consectetur minim est occaecat ut. Consequat occaecat laborum eiusmod non do tempor duis tempor qui anim cupidatat reprehenderit deserunt ullamco. Lorem ut irure labore fugiat quis labore magna. Ea fugiat dolore nulla proident proident pariatur proident velit ea aliquip aliqua.</h2>
          </div>
        </div>
      </Container>
    </>
  )
}

