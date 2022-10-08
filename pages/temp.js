// import * as React from 'react'
// import { styled } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'
// import { red, green, blue } from '@mui/material/colors'

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
// }))

// export default function MediaQuery() {
//   return (
//     <Root>
//       <Typography>down(md): red</Typography>
//       <Typography>up(md): blue</Typography>
//       <Typography>up(lg): green</Typography>
//     </Root>
//   )
// }

import Cardnew from '../components/Cardnew'
import ThreePanel from '../components/ThreePanel'
import firstImage from '../public/images/one.png'
import secondImage from '../public/images/two.png'
import thirdImage from '../public/images/three.png'

export default function Temp() {
  return (
    <>
      <ThreePanel
        panelOne={{ icon: firstImage, name: 'First' }}
        panelTwo={{ icon: secondImage, content: 'Second' }}
        panelThree={{ icon: thirdImage, content: 'Third' }}
      />
    </>
  )
}
