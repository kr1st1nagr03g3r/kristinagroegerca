import { Button } from '@mui/joy';
import Date from '../components/Date';
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';

export default function Hero({ children, button }) {
    return (
        //  I know I need to deconstruct these children. //
        <Container className={styles.hero} fixed>

            <Box className={styles.heroBox01}>
                {/* <h1 className="font-serif">{children}</h1> */}
                <h1 className="font-serif">UIX<br></br>Developer<br></br>& Designer</h1>
                <p className="hero">I am a UIX developer / designer with over 10 years of experience. I build human-centered digital experiences with a focus on accessibility, interaction, and ease of use. I am no stranger to: writing technical documentation,
                    visualizing user-flow, and some more stuff.</p>
                <div className={styles.buttons}>
                    <Button className={styles.buttonBlack}>See What I Can Do</Button>
                    <Date className={styles.date}></Date>
                </div>
            </Box>
            <Box className={styles.heroBox02}>
                <div className={styles.imageWrapper}>
                    <Image src={Images.personWorkingFromHome} layout="responsive" alt="" />
                </div>
            </Box>
        </Container>


    )
}

