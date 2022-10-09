import MultiPanel from '../components/MultiPanel'
import firstImage from '../public/images/one.png'
import secondImage from '../public/images/two.png'
import thirdImage from '../public/images/three.png'
import fourthImage from '../public/images/three.png'
import { Container } from '@mui/system'
import { Box } from '@mui/material'

const title = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  background: '#61ccfe',
  paddingTop: '12px',
}

export default function Temp() {
  return (
    <>
      <Container maxWidth disableGutters={true}>
        <Box style={title} sx={{ padding: '12px 0px' }}>
          <h3>Projects</h3>
        </Box>
        <MultiPanel
          panelOne={{
            icon: firstImage,
            header: 'Migragion from DNN into AEM Cloud',
            name:
              'Front-end rebrands and migration projects via AEM Cloud templates,\
            theming, components, authoring, policies & policy creation for\
            24Petwatch.com, 24Petcare.com, and 24Pet.com',
            alt: 'clouds',
            link: '/work',
            buttonText: 'Learn More',
          }}
          panelTwo={{
            icon: secondImage,
            header: 'Et cupidatat excepteur et et eu irure.',
            name:
              'Pariatur id dolore irure laborum ea eiusmod nostrud do aliquip amet. Quis cillum quis consequat dolor nulla fugiat laborum nulla dolor fugiat. Eiusmod quis eiusmod eiusmod in eu consectetur nisi.',
            alt: 'clouds',
            link: '/work',
            buttonText: 'Learn More',
          }}
        ></MultiPanel>

        <MultiPanel
          panelOne={{
            icon: firstImage,
            header: 'Migragion from DNN into AEM Cloud',
            name:
              'Front-end rebrands and migration projects via AEM Cloud templates,\
            theming, components, authoring, policies & policy creation for\
            24Petwatch.com, 24Petcare.com, and 24Pet.com',
            alt: 'clouds',
            link: '/work',
            buttonText: 'Learn More',
          }}
          panelTwo={{
            icon: secondImage,
            header: 'Et cupidatat excepteur et et eu irure.',
            name:
              'Pariatur id dolore irure laborum ea eiusmod nostrud do aliquip amet. Quis cillum quis consequat dolor nulla fugiat laborum nulla dolor fugiat. Eiusmod quis eiusmod eiusmod in eu consectetur nisi.',
            alt: 'clouds',
            link: '/work',
            buttonText: 'Learn More',
          }}
        ></MultiPanel>
        <span style={title}>
          <p>{''}</p>
        </span>
      </Container>
    </>
  )
}
