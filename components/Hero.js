import { Button } from '@mui/joy';
import Date from '../components/Date';
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';



export default function Hero({ }) {
    const props = {
        header: 'UIX \n Developer \n & Designer',
        type: "fire",
        image: "https://charizard.jpg",
    }

    return (
        //  I know I need to deconstruct these children. //
        <Container className={styles.hero} >
            <Box className={styles.heroBox01}>
                <h1 className="font-serif">UIX<br></br>Developer<br></br>& Designer</h1>
                <p className="hero">Hello, I&apos;m Kristina! I&apos;m a UIX developer & designer with over 10 years of experience.
                    I build <span>human&mdash;centered</span> digital experiences with a focus on accessibility, interaction, and ease of use.</p>
                <div className={styles.buttons}>
                    <Button className={styles.buttonBlack}>See what I can do&nbsp;<SouthIcon /></Button>
                    <Date className={styles.date}></Date>
                </div>
            </Box>

            <Box className={styles.heroBox02}>
                <div className={styles.imageWrapper}>
                    <Image className="reactImagesAreBalls" src={Images.personWorkingFromHome} alt="" />
                </div>
            </Box>

        </Container>


    )
}

