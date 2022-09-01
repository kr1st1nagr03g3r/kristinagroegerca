import Button from '@mui/material/Button'
import { Container, Box } from '@mui/system';
import styles from '../styles/HeroWork.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';



export default function Hero({ }) {

    const props = {
        header: 'Work Experience',
        intro: 'In my decade as a web developer and designer, I\'ve had the opportunity to work with a variety of large brands. Often, brands within brands.',
        headertext: 'I\'m familiar with adhearing to strict brand guidelines, AODA standards, style guides, writing documentation, and mentoring. In addition to development and design, I love working with animation, interaction design, UX review, & illustration.',
        buttontext: 'Projects'
    }

    return (

        <div className={styles.hero}>
            <Container>
                <div className={styles.content}>
                    <Box className={styles.heroBox01}>
                        <h1 className="font-serif ">{props.header}</h1>
                        <p className={styles.pmargin}>{props.intro}</p>
                        <p>{props.headertext}</p>
                        <Button className="buttons">{props.buttontext}&nbsp;<SouthIcon /></Button>
                    </Box>
                    <Box className={styles.heroBox02}>
                        <div>
                            <Image
                                src={Images.growth}
                                alt="A woman climbing the steps of her career" />
                        </div>
                    </Box>
                </div>
            </Container>

        </div>



    )
}
