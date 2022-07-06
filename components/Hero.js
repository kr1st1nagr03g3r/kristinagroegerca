import { Button } from '@mui/joy';
import Date from '../components/Date';
import { Container } from '@mui/system';
import styles from '../styles/Hero.module.css'

export default function Hero({ children }) {
    return (
        //  I know I need to deconstruct these children. //
        <Container className={styles.hero}>
            <Container className={styles.heroInner}>

                <h1 className={`font-serif ${styles.hero}`}>UIX Developer & Designer</h1>
                <p className="hero">I am a UI & UX developer / designer with over 10 years of experience. I build human-centered digital experiences with a focus on accessibility, interaction, and ease of use. I am no stranger to: writing technical documentation, 
                visualizing user-flow, and some more stuff.</p>
                <div className={styles.buttons}>
                    {/* <div className={styles.content}>
                        <Button className="button-white">Available for Hire</Button>
                        <Date className={styles.date}></Date>
                    </div> */}
                    <div className={styles.content}>
                        <Button className={styles.buttonBlack}>See What I Can Do</Button>
                        <Date className={styles.date}></Date>
                    </div>
                </div>
            </Container>
        </Container>

    )
}


