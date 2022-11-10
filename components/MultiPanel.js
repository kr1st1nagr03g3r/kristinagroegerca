import { Box, Button, Card, Container, Grid } from '@mui/material'

import Panel from './Panel'

const centered = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

const background = {
  background: '#61ccfe',
}

export default function MultiPanel(props) {
  return (
    <>
      <Container
        style={background}
        disableGutters={true}
        maxWidth={true}
        sx={{
          justifyContent: 'space-evenly',
        }}
      >
        <Container maxWidth="lg" disableGutters={true} style={centered}>
          <Panel cardData={props.panelOne} />

          <Panel cardData={props.panelTwo} />
          {/* 
          <Panel cardData={props.panelThree} /> */}
        </Container>
      </Container>
    </>
  )
}
