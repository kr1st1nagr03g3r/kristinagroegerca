import { Container } from '@mui/material'
import Button from '../components/Button'
import { email } from '../src/config'

const Contact = () => {
  return (
    <>
      <Container>
        <h2 className="title">Get In Touch</h2>

        <p>
          I am currently looking for full-time remote positions. I am based in
          Canada, and would love to get in touch with you!
        </p>
        <Button href={`mailto:${email}`}>Say Hello</Button>
      </Container>
    </>
  )
}

export default Contact
