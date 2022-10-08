import { Grid } from '@mui/material'
import Panel from './Panel'

export default function ThreePanel(props) {
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
    </Grid>
  )
}
