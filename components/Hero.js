import { Button } from '@mui/joy';
import Date from '../components/Date';
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';

export default function Hero({ children, button }) {
    return (
        //  I know I need to deconstruct these children. //
        <Container className={styles.hero} fixed>

            <Box className={styles.heroBox01}>
                {/* <h1 className="font-serif">{children}</h1> */}
                <h1 className="font-serif">UIX<br></br>Developer<br></br>& Designer</h1>
                <p className="hero">Hello and thanks for visiting! I am a UIX developer & designer with over 10 years of experience.
                    I build <span>human&mdash;centered</span> digital experiences with a focus on accessibility, interaction, and ease of use.</p>
                <div className={styles.buttons}>
                    <Button className={styles.buttonBlack}>Fugiat Officia Cupidatat&nbsp;<SouthIcon /></Button>
                    <Date className={styles.date}></Date>
                </div>
            </Box>

            <Box className={styles.heroBox02}>
                <div className={styles.imageWrapper}>
                    <Image className="reactImagesAreBalls" src={Images.personWorkingFromHome} layout="fill" alt="" />
                </div>
            </Box>

        </Container>


    )
}

