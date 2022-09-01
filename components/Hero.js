import Button from '@mui/material/Button'
import { Container, Box } from '@mui/system';
import styles from '../styles/Hero.module.css';
import Images from "../public/home/index.js";
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';
import Date from '../components/Date'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export default function Hero({ children }) {

    const props = {
        header: 'UIX Developer \n & Designer',
        intro: 'Hello, I\'m Kristina Groeger 👋🏻.',
        headertext: ' I\'m a UIX Developer & Designer with over 10 years of experience. \n I build front-end experiences and solutions with a focus on accessibility, interaction, and ease of use.',
        buttontext: 'Have a Look'
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'ghostwhite',
        // ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'right',
        color: theme.palette.text.secondary,
    }));

    return (

        <>
            <Container className={styles.hero}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Item elevation={0}>
                                <Image
                                    src={Images.personWorkingFromHome}
                                    alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" /></Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item elevation={0}
                                sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    alignContent: 'flex-end',
                                    flexWrap: 'wrap'
                                }} >
                                <h1 className="font-serif">{props.header}</h1>
                                <p>{props.intro}</p>
                                <p>{props.headertext}</p>
                                <Button className="buttons">{props.buttontext}&nbsp;<SouthIcon />
                                </Button>
                                <Date />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>



        </>

    )
}
// -webkit - justify - content: flex - end;
// justify - content: center;
// flex - wrap: nowrap;
// align - content: flex - end;