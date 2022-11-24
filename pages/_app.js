import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import Nav from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
