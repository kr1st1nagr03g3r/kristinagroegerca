import styles from '/styles/animatedAssets/Starfield.module.css'
import Image from 'next/image';
import Images from '../../public/home/index.js';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Starfield({ }) {

    const props = {
        starfieldHead01: 'I\'m comfortable with a diverse range of tools & tech',
        starfieldHead02: '',
        buttontext: 'see more'
    }


    return (
        <>


            <Container className={` maxWidthLg ${styles.container}`} >
                <div>
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
                </div>
                <div className={styles.whatever}>
                    <Box className={styles.boxOne}>
                        <div className={styles.content}>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead01}</h1>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead02}</h1>
                            <div className={styles.button}>
                                <Button className={` buttons ${styles.buttons}`}>{props.buttontext}</Button>
                            </div>
                        </div>
                    </Box>
                    <Box className={styles.boxTwo}>

                        <div className={` spaceStuff ${styles.spaceStuff}`}>
                            <div className={styles.align}>
                                <div className={styles.positionJS}>
                                    <div className={styles.js}>
                                        <Image className="js"
                                            width={60}
                                            height={60}
                                            src={Images.js}
                                            alt="White Javascript logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionReact}>
                                    <div className={styles.react}>
                                        <Image className="react"
                                            width={60}
                                            height={60}
                                            src={Images.react}
                                            alt="White React logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionNextjs}>
                                    <div className={styles.nextjs}>
                                        <Image className="nextjs"
                                            width={60}
                                            height={60}
                                            src={Images.nextjs}
                                            alt="White nextjs logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionVercel}>
                                    <div className={styles.vercel}>
                                        <Image className="vercel"
                                            width={80}
                                            height={80}
                                            src={Images.vercel}
                                            alt="White vercel logo"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.align}>
                                <div className={styles.positionGH}>
                                    <div className={styles.gh}>
                                        <Image className="gh"
                                            width={60}
                                            height={60}
                                            src={Images.github}
                                            alt="White Github logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionCSS}>
                                    <div className={styles.css}>
                                        <Image className="html"
                                            width={60}
                                            height={60}
                                            src={Images.css}
                                            alt="White CSS logo"
                                        />
                                        <p className={styles.html5}>CSS</p>
                                    </div>
                                </div>

                                <div className={styles.positionaem}>
                                    <div className={styles.aem}>
                                        <Image className="aem"
                                            width={60}
                                            height={60}
                                            src={Images.aem}
                                            alt="White aem logo"
                                        />

                                    </div>
                                </div>

                                <div className={styles.positionNode}>
                                    <div className={styles.nodejs}>
                                        <Image className="nodejs"
                                            width={60}
                                            height={60}
                                            src={Images.nodejs}
                                            alt="White node logo"
                                        />

                                    </div>
                                </div>
                            </div>


                            <div className={styles.align}>
                                <div className={styles.positionHTML}>
                                    <div className={styles.html}>
                                        <Image className="html"
                                            width={60}
                                            height={60}
                                            src={Images.html}
                                            alt="White HTML logo"
                                        />
                                        <p className={styles.html5}>HTML</p>
                                    </div>
                                </div>

                                <div className={styles.positionSASS}>
                                    <div className={styles.sass}>
                                        <Image className="sass"
                                            width={60}
                                            height={60}
                                            src={Images.sass}
                                            alt="White Sass logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionTailwind}>
                                    <div className={styles.tailwind}>
                                        <Image className="tailwind"
                                            width={60}
                                            height={60}
                                            src={Images.tailwind}
                                            alt="White Sass logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionBootstrap}>
                                    <div className={styles.bootstrap}>
                                        <Image className="bootstrap"
                                            width={60}
                                            height={60}
                                            src={Images.bootstrap}
                                            alt="White bootstrap logo"
                                        />
                                    </div>
                                </div>


                            </div>

                            <div className={styles.align}>
                                <div className={styles.positionFigma}>
                                    <div className={styles.figma}>
                                        <Image className="figma"
                                            width={60}
                                            height={60}
                                            src={Images.figma}
                                            alt="White photoshop logo"
                                        />

                                    </div>
                                </div>

                                <div className={styles.positionAE}>
                                    <div className={styles.AE}>
                                        <Image className="AE"
                                            width={60}
                                            height={60}
                                            src={Images.AE}
                                            alt="White Sass logo"
                                        />
                                    </div>
                                </div>

                                <div className={styles.positionIllustrator}>
                                    <div className={styles.illustrator}>
                                        <Image className="illustrator"
                                            width={60}
                                            height={60}
                                            src={Images.illustrator}
                                            alt="White Sass logo"
                                        />
                                    </div>
                                </div>
                                <div className={styles.positionPhotoshop}>
                                    <div className={styles.photoshop}>
                                        <Image className="photoshop"
                                            width={60}
                                            height={60}
                                            src={Images.photoshop}
                                            alt="White photoshop logo"
                                        />

                                    </div>
                                </div>


                            </div>


                        </div>
                    </Box>
                </div>
            </Container>
        </>
    )
}