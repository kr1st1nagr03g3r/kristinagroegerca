import { Button } from '@mui/joy';
import Date from '../components/Date';
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';



export default function Hero({ }) {

    const props = {
        header: 'UIX Developer \n & Designer',
        headertext: 'Hello, I\'m Kristina Groeger 👋🏻 . \n I\'m a UIX Developer & Designer with over 10 years of experience. \n I build digital experiences and solutions with a focus on accessibility, interaction, and ease of use.'
    }

    return (
        <Container className={styles.hero} >
            <Box className={styles.heroBox02}>
                <div className={styles.imageWrapper}>
                    <Image className="reactImagesAreBalls" src={Images.personWorkingFromHome} alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" />
                </div>
            </Box>
            <Box className={styles.heroBox01}>
                <h1 className="font-serif">{props.header}</h1>
                <p className="hero">{props.headertext}</p>
                <div className={styles.buttons}>
                    <Button className={styles.buttonBlack}>See what I can do&nbsp;<SouthIcon /></Button>
                    <Date className={styles.date}></Date>
                </div>
            </Box>



        </Container>


    )
}

        // headertext: 'Hello, there. I\'m Kristina'
        // Hi, there.I & apos; m a UIX developer & designer with over 10 years of experience.
        //             I build < span > human & mdash;centered</ > digital experiences with a focus on accessibility, interaction, and ease of use.