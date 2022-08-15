import styles from '/styles/animatedAssets/Starfield.module.css'
import Image from 'next/image';
import Images from '../../public/home/index.js';

export default function Starfield({ }) {

    const props = {
        starfieldHead01: 'I am comfortable using',
        starfieldHead02: 'a diverse set of tools',
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

                            <div className={styles.js}>
                                <Image className="js"
                                    width={60}
                                    height={60}
                                    src={Images.js}
                                    alt="White Javascript logo"
                                />
                            </div>

                            <div className={styles.gh}>
                                <Image className="gh"
                                    width={60}
                                    height={60}
                                    src={Images.github}
                                    alt="White Github logo"
                                />
                            </div>

                        </div>
                        <div className={styles.content}>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead01}</h1>
                            <h1 className={`text-white font-serif ${styles.fadeIn}`}>{props.starfieldHead02}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}