import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/home/index'

export default function Logos() {
  return (
    <>
      <style jsx>{`
        .spaceStuff {
          position: relative;
        }
        .align {
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: space-between;
          align-items: center;
        }

        /**
 * ----------------------------------------
 * LOGO animations
 * ----------------------------------------
 */

        .js {
          animation-duration: 3s;
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .react {
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation: rotateCenter 10s linear infinite both;
        }

        .nextjs,
        .css,
        .html {
          animation-duration: 6s;
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .vercel,
        .gh,
        .AE,
        .sass,
        .nodejs {
          animation-duration: 4s;
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .tailwind,
        .illustrator,
        .mui {
          animation-duration: 5s;
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .aem {
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation: rotateCenter 8s linear infinite both;
        }

        .figma,
        .photoshop {
          animation-duration: 7s;
          animation-name: floating;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        p.html5,
        p.css {
          margin-top: 0px;
          margin-bottom: 0px;
          text-align: center;
          color: white;
        }

        .positionReact,
        .positionNextjs,
        .positionVercel,
        .positionCSS,
        .positionaem,
        .positionNode,
        .positionHTML,
        .positionSASS,
        .positionTailwind,
        .positionMUI,
        .positionFigma,
        .positionAE,
        .positionIllustrator,
        .positionPhotoshop {
          padding: 30px;
          cursor: pointer !important;
        }

        .positionJS,
        .positionGH,
        .positionHTML,
        .positionFigma {
          padding: 30px 30px 30px 0px;
          cursor: pointer !important;
        }

        /**
 * ----------------------------------------
 * animation floating
 * ----------------------------------------
 */

        @keyframes floating {
          0% {
            transform: translate(0, 0px);
          }
          50% {
            transform: translate(0, 10px);
          }
          100% {
            transform: translate(0, -0px);
          }
        }

        @media only screen and (max-width: 900px) {
          .positionReact,
          .positionNextjs,
          .positionVercel,
          .positionCSS,
          .positionaem,
          .positionNode,
          .positionHTML,
          .positionSASS,
          .positionTailwind,
          .positionMUI,
          .positionFigma,
          .positionAE,
          .positionIllustrator,
          .positionPhotoshop,
          .positionJS,
          .positionGH,
          .positionHTML,
          .positionFigma {
            padding: 0px;
            width: 25px;
            height: 25px;
            cursor: pointer !important;
          }
        }
      `}</style>

      <div className="spaceStuff">
        <div className="align">
          <div className="positionJS">
            <Link href="/work">
              <div className="js">
                <Image
                  className="js"
                  width={60}
                  height={60}
                  src={Images.js}
                  alt="White Javascript logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionReact">
            <Link href="/work">
              <div className="react">
                <Image
                  className="react"
                  width={60}
                  height={60}
                  src={Images.react}
                  alt="White React logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionNextjs">
            <Link href="/work">
              <div className="nextjs">
                <Image
                  className="nextjs"
                  width={60}
                  height={60}
                  src={Images.nextjs}
                  alt="White nextjs logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionVercel">
            <Link href="/work">
              <div className="vercel">
                <Image
                  className="vercel"
                  width={80}
                  height={80}
                  src={Images.vercel}
                  alt="White vercel logo"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="align">
          <div className="positionGH">
            <Link href="/work">
              <div className="gh">
                <Image
                  className="gh"
                  width={60}
                  height={60}
                  src={Images.github}
                  alt="White Github logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionCSS">
            <Link href="/work">
              <div className="css">
                <Image
                  className="html"
                  width={60}
                  height={60}
                  src={Images.css}
                  alt="White CSS logo"
                />
                <p className="html5">CSS</p>
              </div>
            </Link>
          </div>

          <div className="positionaem">
            <Link href="/work">
              <div className="aem">
                <Image
                  className="aem"
                  width={60}
                  height={60}
                  src={Images.aem}
                  alt="White aem logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionNode">
            <Link href="/work">
              <div className="nodejs">
                <Image
                  className="nodejs"
                  width={60}
                  height={60}
                  src={Images.nodejs}
                  alt="White node logo"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="align">
          <div className="positionHTML">
            <Link href="/work">
              <div className="html">
                <Image
                  className="html"
                  width={60}
                  height={60}
                  src={Images.html}
                  alt="White HTML logo"
                />
                <p className="html5">HTML</p>
              </div>
            </Link>
          </div>

          <div className="positionSASS">
            <Link href="/work">
              <div className="sass">
                <Image
                  className="sass"
                  width={60}
                  height={60}
                  src={Images.sass}
                  alt="White Sass logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionTailwind">
            <Link href="/work">
              <div className="tailwind">
                <Image
                  className="tailwind"
                  width={60}
                  height={60}
                  src={Images.tailwind}
                  alt="White Sass logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionMUI">
            <Link href="/work">
              <div className="mui">
                <Image
                  className="mui"
                  width={60}
                  height={60}
                  src={Images.mui}
                  alt="White MUI logo"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="align">
          <div className="positionFigma">
            <Link href="/work">
              <div className="figma">
                <Image
                  className="figma"
                  width={60}
                  height={60}
                  src={Images.figma}
                  alt="White photoshop logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionAE">
            <Link href="/work">
              <div className="AE">
                <Image
                  className="AE"
                  width={60}
                  height={60}
                  src={Images.AE}
                  alt="White Sass logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionIllustrator">
            <Link href="/work">
              <div className="illustrator">
                <Image
                  className="illustrator"
                  width={60}
                  height={60}
                  src={Images.illustrator}
                  alt="White Sass logo"
                />
              </div>
            </Link>
          </div>

          <div className="positionPhotoshop">
            <Link href="/work">
              <div className="photoshop">
                <Image
                  className="photoshop"
                  width={60}
                  height={60}
                  src={Images.photoshop}
                  alt="White photoshop logo"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
