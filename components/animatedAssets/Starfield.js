import styles from '/styles/animatedAssets/Starfield.module.css'
import Image from 'next/image';
import Images from '../../public/home/index.js';
import Button from '@mui/material/Button'

export default function Starfield({ }) {

    const props = {
        starfieldHead01: 'I am comfortable using',
        starfieldHead02: 'a diverse range of tools & tech',
        buttontext: 'see more'
    }


    return (
        <>


            <div className={` ${styles.container}`} >
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

                    <div className={styles.whatever}>
                        <div className={` maxWidthLg ${styles.spaceStuff}`}>
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
                            <div className={styles.positionHTML}>
                                <div className={styles.html}>
                                    <Image className="html"
                                        width={100}
                                        height={100}
                                        src={Images.html}
                                        alt="White HTML logo"
                                    />
                                    <p className={styles.html5}>HTML 5</p>
                                </div>
                            </div>
                            {/* <div className={styles.positionCSS}>
                                <div className={styles.css}>
                                    <Image className="css"
                                        width={100}
                                        height={100}
                                        src={Images.css}
                                        alt="White CSS logo"
                                    />
                                    <p className={styles.html5}>HTML 5</p>
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.content}>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead01}</h1>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead02}</h1>
                            <div className={styles.button}>
                                <Button className={` buttons ${styles.buttons}`}>{props.buttontext}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}