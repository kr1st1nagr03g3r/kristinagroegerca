import Button from '../components/Button';
import Date from '../components/Date';
import { Container } from '@mui/system';
import styles from '../styles/Hero.module.css'

export default function Hero({ children }) {
    return (
        //  I know I need to deconstruct these children. //
        <Container className={styles.hero}>
            <Container className={styles.heroInner}>

                <h1 className={`font-serif ${styles.hero}`}>UIX Developer<br></br>& Designer</h1>
                <p className="hero">I&apos;m a UI / UX developer & designer with over 10 years of experience building human-centered digital experiences with a focus on accessibility. Besides dev and design, I specialize in interaction-design, technical & style system documentation, solution-based communication, digital illustration / animation, and content creation.</p>
                <div className={styles.buttons}>
                    <div className={styles.content}>
                        <Button className="button-white">Available for Hire</Button>
                        <Date className={styles.date}></Date>
                    </div>
                    <div className={styles.content}>
                        <Button className={styles.tempButton}>See What I Can Do</Button>
                        <Date className={styles.date}></Date>
                    </div>
                </div>
            </Container>
        </Container>

    )
}


