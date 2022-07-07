import { Container } from '@mui/system'
import styles from '/styles/animatedAssets/Starfield.module.css'
import Image from 'next/image'
import satellite from '/public/satellite.svg'

export default function Starfield({children}) {
    return (
        <>
        <Container className={styles.container}>
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
                <div className={styles.spaceStuff}>
                {/* <SatelliteAltIcon className={styles.satellite}/> */}
                <Image className={styles.satellite} src={satellite} alt="a tiny satellite"></Image>
                </div>
                <span className={styles.content}>
                    {children}
                </span>
            </div>
        </Container>
        </>
    )
}