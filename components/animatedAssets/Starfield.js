import styles from '/styles/animatedAssets/Starfield.module.css'
import Image from 'next/image';
import Images from '../../public/home/index.js';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

export default function Starfield({ }) {

    const props = {
        starfieldHead01: 'I\'m comfortable  ',
        starfieldHead02: 'working with a diverse ',
        starfieldHead03: 'range of tech & tools',
        buttontext: 'see more'
    }


    return (
        <>
            <div className={` scroller ${styles.container}`} >
                <section>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                    <span className={styles.star}>.</span>
                </section>
                <Container className={styles.whatever} >

                    <Box className={styles.boxOne}>
                        <div className={styles.content}>
                            <h2 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead01}</h2>
                            <h2 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead02}</h2>
                            <h2 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead03}</h2>
                            <div className={styles.button}>
                                <Button className={` buttons ${styles.buttons}`}>{props.buttontext}</Button>
                            </div>
                        </div>
                    </Box>
                    <Box className={styles.boxTwo}>

                        <div className={` spaceStuff ${styles.spaceStuff}`}>
                            <div className={styles.align}>
                                <div className={styles.positionJS}>
                                    <Link href="/work" >
                                        <div className={styles.js}>
                                            <Image className="js"
                                                width={60}
                                                height={60}
                                                src={Images.js}
                                                alt="White Javascript logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionReact}>
                                    <Link href="/work" >
                                        <div className={styles.react}>
                                            <Image className="react"
                                                width={60}
                                                height={60}
                                                src={Images.react}
                                                alt="White React logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionNextjs}>
                                    <Link href="/work" >
                                        <div className={styles.nextjs}>
                                            <Image className="nextjs"
                                                width={60}
                                                height={60}
                                                src={Images.nextjs}
                                                alt="White nextjs logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionVercel}>
                                    <Link href="/work" >
                                        <div className={styles.vercel}>
                                            <Image className="vercel"
                                                width={80}
                                                height={80}
                                                src={Images.vercel}
                                                alt="White vercel logo"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.align}>
                                <div className={styles.positionGH}>
                                    <Link href="/work" >
                                        <div className={styles.gh}>
                                            <Image className="gh"
                                                width={60}
                                                height={60}
                                                src={Images.github}
                                                alt="White Github logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionCSS}>
                                    <Link href="/work" >
                                        <div className={styles.css}>
                                            <Image className="html"
                                                width={60}
                                                height={60}
                                                src={Images.css}
                                                alt="White CSS logo"
                                            />
                                            <p className={styles.html5}>CSS</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionaem}>
                                    <Link href="/work" >
                                        <div className={styles.aem}>
                                            <Image className="aem"
                                                width={60}
                                                height={60}
                                                src={Images.aem}
                                                alt="White aem logo"
                                            />

                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionNode}>
                                    <Link href="/work"  >
                                        <div className={styles.nodejs}>
                                            <Image className="nodejs"
                                                width={60}
                                                height={60}
                                                src={Images.nodejs}
                                                alt="White node logo"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>


                            <div className={styles.align}>
                                <div className={styles.positionHTML}>
                                    <Link href="/work" >
                                        <div className={styles.html}>
                                            <Image className="html"
                                                width={60}
                                                height={60}
                                                src={Images.html}
                                                alt="White HTML logo"
                                            />
                                            <p className={styles.html5}>HTML</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionSASS}>
                                    <Link href="/work" >
                                        <div className={styles.sass}>
                                            <Image className="sass"
                                                width={60}
                                                height={60}
                                                src={Images.sass}
                                                alt="White Sass logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionTailwind}>
                                    <Link href="/work" >
                                        <div className={styles.tailwind}>
                                            <Image className="tailwind"
                                                width={60}
                                                height={60}
                                                src={Images.tailwind}
                                                alt="White Sass logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionMUI}>
                                    <Link href="/work" >
                                        <div className={styles.mui}>
                                            <Image className="mui"
                                                width={60}
                                                height={60}
                                                src={Images.mui}
                                                alt="White MUI logo"
                                            />
                                        </div>
                                    </Link>
                                </div>


                            </div>

                            <div className={styles.align}>
                                <div className={styles.positionFigma}>
                                    <Link href="/work" >
                                        <div className={styles.figma}>
                                            <Image className="figma"
                                                width={60}
                                                height={60}
                                                src={Images.figma}
                                                alt="White photoshop logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionAE}>
                                    <Link href="/work" >
                                        <div className={styles.AE}>
                                            <Image className="AE"
                                                width={60}
                                                height={60}
                                                src={Images.AE}
                                                alt="White Sass logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionIllustrator}>
                                    <Link href="/work" >
                                        <div className={styles.illustrator}>
                                            <Image className="illustrator"
                                                width={60}
                                                height={60}
                                                src={Images.illustrator}
                                                alt="White Sass logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionPhotoshop}>
                                    <Link href="/work" >
                                        <div className={styles.photoshop}>
                                            <Image className="photoshop"
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
                    </Box>

                </Container>
            </div>
        </>
    )
}