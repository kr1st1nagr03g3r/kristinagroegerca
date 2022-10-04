import Button from '@mui/material/Button'
import { Container, Box } from '@mui/system'
import styles from '../styles/Hero.module.css'
import Images from '../public/home/index.js'
import Image from 'next/image'
import SouthIcon from '@mui/icons-material/South'
import Date from '../components/Date'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Hero({ children }) {
  const props = {
    header: 'UIX Developer \n & Designer',
    intro: "Hello, I'm Kristina Groeger 👋🏻.",
    headertext:
      " I'm a UIX Developer & Designer with over 10 years of experience. \n I build front-end experiences and solutions with a focus on accessibility, interaction, and ease of use.",
    buttontext: 'Have a Look',
  }

<<<<<<< HEAD
  return (
    <Container>
      <div className={styles.hero}>
        <Box className={styles.heroBox02}>
          <div>
            <Image
              src={Images.personWorkingFromHome}
              alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping"
            />
          </div>
        </Box>

        <Box className={styles.heroBox01}>
          <h1 className="font-serif">{props.header}</h1>
          <p className={styles.pmargin}>{props.intro}</p>
          <p>{props.headertext}</p>
          <Button className="buttons">
            {props.buttontext}&nbsp;
            <SouthIcon />
          </Button>
          <Date />
        </Box>
      </div>
    </Container>
  )
=======


    const text = {
        header: 'Front-End Developer & Designer - UIX',
        headertext: 'Hello, I\'m Kristina Groeger 👋🏻. I\'ve been building and designing digital experiences for over 10 years. I specialize in user experience, interaction design, CSS-wizardry, and accessibility.',
        buttontext: 'Have a Look'
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'ghostwhite',
        padding: theme.spacing(1),
        textAlign: 'left',
    }));

    return (

        <>
            <Container >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container className={styles.hero}>
                        <Grid item xs={12} md={6} >
                            <Item elevation={0}
                                sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <h1 className="font-serif">{text.header}</h1>
                                <p>{text.headertext}</p>
                                <div className={styles.button}>
                                    <Button className="buttons"
                                        sx={{

                                            textAlign: 'center',
                                        }}
                                    >{text.buttontext}&nbsp;<SouthIcon />
                                    </Button>
                                </div>
                                <Date />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Item elevation={0}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={Images.personWorkingFromHome}
                                    alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping" />
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>



        </>

    )
>>>>>>> main
}
// -webkit - justify - content: flex - end;
// justify - content: center;
// flex - wrap: nowrap;
// align - content: flex - end;