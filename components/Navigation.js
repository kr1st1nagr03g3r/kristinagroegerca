
import { Container } from "@mui/system"
import Link from "next/link"
import { useInView } from 'react-intersection-observer';
import styles from '../styles/animatedAssets/AnimateNav.module.css'

export default function Nav() {



    return (
        <>
            <Container className={styles.nav} maxWidth={false} disableGutters={true}>
                <Container className={styles.navInner}>
                    <div className="logo">
                        <Link href="/"><a><i>Kristina Groeger</i></a></Link>
                    </div>

                    <div className="links">
                        <Link href="/"><a className={styles.home}>Home</a></Link>
                        <Link href="/work" ><a className={styles.work}>Work</a></Link>
                        <Link href="/about"><a className={styles.about}>About</a></Link>
                        <Link href="/contact"><a className={styles.contact}>Contact</a></Link>
                    </div>
                </Container>
            </Container>
        </>
    )
}

