import Button from '@mui/material/Button'
import { Container, Box } from '@mui/system';
import styles from '../styles/HeroWork.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';
import Clients from './Clients';


export default function Hero({ }) {

    const props = {
        header: 'Work Experience',
        intro: 'In my 10 years as a web developer and designer, I\'ve had the opportunity to work with a variety of large brands. Often, brands within brands.',
        headertext: 'I\'m familiar with adhearing to strict brand guidelines, AODA standards, style guides, writing documentation, and mentoring. In addition to development and design, I love working with animation, interaction design, UX review, & illustration.',
        buttontext: 'Projects'
    }

    return (
        <Container >
            <div className={styles.hero}>
                <Box className={styles.heroBox01}>
                    <h1 className="font-serif">{props.header}</h1>
                    <p className={styles.pmargin}>{props.intro}</p>
                    <p>{props.headertext}</p>
                    <Button className="buttons">{props.buttontext}&nbsp;<SouthIcon /></Button>
                </Box>
                <Box className={styles.heroBox02}>
                    <div>
                        <Image
                            src={Images.growth}
                            alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" />
                    </div>
                </Box>


            </div>
        </Container>


    )
}
