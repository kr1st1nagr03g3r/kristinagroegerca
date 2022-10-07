import Button from '@mui/material/Button'
import Image from 'next/image'
import SouthIcon from '@mui/icons-material/South'
import Date from '../components/Date'
import { Box, Container } from '@mui/material'
import Images from '../public/home/index'

export default function Hero() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '60px 30px 60px 30px ', lg: '160px 0 60px 0' },
        }}
      >
        <Box sx={{ flex: '1' }}>
          <h1 className="font-serif bold">
            Front-End Developer<br></br>& Designer - UIX
          </h1>
          <p>
            Hello, I&apos;m Kristina Groeger 👋🏻. <br></br>
            I&apos;ve been building and designing digital experiences for over
            10 years. I specialize in user experience, interaction design,
            CSS-wizardry, and accessibility.
          </p>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'center', lg: 'flex-start' },
              flexDirection: 'column',
            }}
          >
            <Button
              href="#projects"
              className="buttons"
              sx={{
                textAlign: 'center',
                textTransform: 'none',
              }}
            >
              Have a Look&nbsp;
              <SouthIcon />
            </Button>
            <Date />
          </Box>
        </Box>

        <Box
          sx={{
            flex: '1',
            padding: { xs: '0 60px', lg: '0px 0px 60px 0px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={Images.personWorkingFromHome}
            alt="an illustration of a woman typing on a computer with her dog underneath her desk sleeping"
            width="400"
            height="400"
          />
        </Box>
      </Container>
    </>
  )
}
