import { Box, Container } from '@mui/material'
import { spacing } from '@mui/system'
import Image from 'next/image'
import Images from '../public/home'
import Clients from './Clients'

export default function Clientele() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: '60px 0px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Image
            src={Images.dog}
            width="200"
            height="120"
            alt="spotty dog doing a BIG STRETCH"
          />
          <h3 className="bold">
            I love working with teams of<br></br>all sizes that value great
            design
          </h3>
        </Box>
        <Clients />
      </Container>
    </>
  )
}
