import Button from '@mui/material/Button'
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';
import Date from '../components/Date'


export default function Hero({ children }) {

    const props = {
        header: 'UIX Developer \n & Designer',
        intro: 'Hello, I\'m Kristina Groeger 👋🏻.',
        headertext: ' I\'m a UIX Developer & Designer with over 10 years of experience. \n I build front-end experiences and solutions with a focus on accessibility, interaction, and ease of use.',
        buttontext: 'Have a Look'
    }

    return (
        <Container >
            <div className={styles.hero}>
                <Box className={styles.heroBox02}>
                    <div>
                        <Image
                            src={Images.personWorkingFromHome}
                            alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" />
                    </div>
                </Box>

                <Box className={styles.heroBox01}>
                    <h1 className="font-serif">{props.header}</h1>
                    <p className={styles.pmargin}>{props.intro}</p>
                    <p>{props.headertext}</p>
                    <Button className="buttons">{props.buttontext}&nbsp;<SouthIcon /></Button>
                    <Date />
                </Box>
            </div>
        </Container>


    )
}
