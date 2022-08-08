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
        headertext: 'Hello, I\'m Kristina Groeger 👋🏻 . \n I\'m a UIX Developer & Designer with over 10 years of experience. \n I build digital experiences and solutions with a focus on accessibility, interaction, and ease of use.',
        buttontext: 'Come Have a Look'
    }

    return (
        <Container className={styles.hero}>
            <Box className={styles.heroBox02}>
                <div>
                    <Image className="reactImagesAreBalls"
                        src={Images.personWorkingFromHome}
                        alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" />
                </div>
            </Box>

            <Box className={styles.heroBox01}>
                <h1 className="font-serif">{props.header}</h1>
                <p>{props.headertext}</p>
                <div className={styles.buttons}>
                    <Button className={styles.buttonBlack}>{props.buttontext}&nbsp;<SouthIcon /></Button>
                    <Date className={styles.date}></Date>
                </div>
            </Box>



        </Container>


    )
}
