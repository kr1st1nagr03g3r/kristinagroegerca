import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Panel from './Panel'

export default function MultiPanel(props) {
  return (
    <Grid container>
      <Grid item>
        <Panel cardData={props.panelOne} />
      </Grid>
      <Grid item>
        <Panel cardData={props.panelTwo} />
      </Grid>
      <Grid item>
        <Panel cardData={props.panelThree} />
      </Grid>
      <Grid item>
        <Panel cardData={props.panelFour} />
      </Grid>
    </Grid>
  )
}
