import { Box, Container } from '@mui/system'
import Image from 'next/image'
import Button from '../components/Button'

const Hero = ({
  header,
  content,
  buttonLink,
  buttonContent,
  src,
  height,
  width,
  alt,
  ...props
}) => (
  <>
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '15px 30px 60px 30px ', lg: '30px 0 60px 0' },
      }}
    >
      <Box sx={{ flex: '1' }}>
        <h1 className="font-serif bold">{header}</h1>
        <p>{content}</p>
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'center', lg: 'flex-start' },
            flexDirection: 'column',
          }}
        >
          <Button
            href={buttonLink}
            className="buttons"
            sx={{
              textAlign: 'center',
              textTransform: 'none',
            }}
          >
            {buttonContent}
          </Button>
          {/* <Date /> */}
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
        <Image {...props} src={src} height={height} width={width} alt={alt} />
      </Box>
    </Container>
  </>
)

export default Hero
