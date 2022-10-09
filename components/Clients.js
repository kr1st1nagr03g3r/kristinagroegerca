import Container from '@mui/material/Container'
import images from '../public/clients/index.js'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/system'

export default function Clients() {
  return (
    <>
      <style jsx>{`
        .logoBox {
          cursor: pointer;
        }
        .logoBox {
          position: relative;
          height: 100px;
          width: 100px;
          margin: 15px 30px;
        }

        @media only screen and (max-width: 900px) {
          .logoBox {
            margin: 15px;
          }
        }
      `}</style>

      <Container
        maxWidth="lg"
        disableGutters={true}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.canadaLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.capitalOneLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>

        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.intuitLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>

        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.kitchenaidLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>
      </Container>

      <Container
        maxWidth="lg"
        disableGutters={true}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.maytagLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>

        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.whirlpoolLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>

        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.loblawsLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="/work">
          <div className="logoBox">
            <Image
              className="logo"
              src={images.universityOfMcGillLogo}
              alt=" Canada logo"
              layout="fill"
            />
          </div>
        </Link>
      </Container>
    </>
  )
}
