import { Container } from "@mui/system"
import Link from "next/link"
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <>

            <div className={styles.max}>
                <Container className={styles.container}>
                    <div className={styles.nav}>
                        <div className={styles.relativeContainer}>
                            <div className={styles.logo}>
                                <Link href="/"><a><i>Kristina Groeger</i></a></Link>
                            </div>
                        </div>

                        <div className={styles.links}>
                            <Link href="/"><a className={styles.navItems}>Home</a></Link>
                            <Link href="/work"><a className={styles.navItems}>Work</a></Link>
                            <Link href="/about"><a className={styles.navItems} >About</a></Link>
                            <Link href="/contact"><a className={styles.navItemEnd}>Contact</a></Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}