import Button from '@mui/material/Button'
import styles from '../styles/Hero.module.css'
import Images from '../public/home/index.js'
import Image from 'next/image'
import SouthIcon from '@mui/icons-material/South'
import Date from '../components/Date'
import { Box, Container } from '@mui/material'

export default function Hero() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          padding: '160px 0 60px 0',
        }}
      >
        <Box sx={{ width: '45%' }}>
          <h1 className="font-serif bold">
            Front-End Developer<br></br>& Designer - UIX
          </h1>
          <p>
            Hello, I&apos;m Kristina Groeger 👋🏻. <br></br>
            I&apos;ve been building and designing digital experiences for over
            10 years. I specialize in user experience, interaction design,
            CSS-wizardry, and accessibility.
          </p>
          <div className={styles.button}>
            <Button
              className="buttons"
              sx={{
                textAlign: 'center',
              }}
            >
              Have a Look&nbsp;
              <SouthIcon />
            </Button>
          </div>
          <Date />
        </Box>

        <Box sx={{ width: '45%' }}>
          <Image
            src={Images.personWorkingFromHome}
            alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping"
            width="450"
            height="450"
          />
        </Box>
      </Container>
    </>
  )
}
