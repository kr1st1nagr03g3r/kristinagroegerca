import { Container } from '@mui/system'
import styles from '/styles/animatedAssets/Starfield.module.css'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BoltIcon from '@mui/icons-material/Bolt';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import CategoryIcon from '@mui/icons-material/Category';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default function Starfield({ }) {

    const props = {
        starfieldHead01: 'I am comfortable using',
        starfieldHead02: 'a diverse set of tools',
    }


    return (
        <>

            <Container className={styles.container} maxWidth>
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
                        {/* <Image className={styles.satellite} src={satellite} alt="a tiny satellite"></Image> */}
                        <RocketLaunchIcon />
                        <BoltIcon />
                        <SatelliteAltIcon />
                        <Brightness3Icon />
                        <Brightness5Icon />
                        <CategoryIcon />
                        <LogoDevIcon />
                    </div>
                    <div className={styles.content}>
                        <h1 className={`text-white font-serif ${styles.slideInBlurredTop}`}>{props.starfieldHead01}</h1>
                        <h1 className={`text-white font-serif ${styles.slideInBlurredBottom}`}>{props.starfieldHead02}</h1>

                        {/* <h1 className={`font-serif ${styles.hero}`}></h1> */}
                    </div>
                </div>
            </Container>
        </>
    )
}