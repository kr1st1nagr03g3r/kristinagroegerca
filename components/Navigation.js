import { Container } from "@mui/system"
import Link from "next/link"
import styles from '../styles/Nav.module.css'
import Eye from "../components/animatedAssets/Eyeball.js"

export default function Nav() {
    return (
        <>
            <Container maxWidth className={styles.max} >
                <Container fixed>
                    <div className={styles.nav}>
                        <div className={styles.relativeContainer}>
                            <div className={styles.logo}>
                                <Eye />
                            </div>
                        </div>

                        <div className={styles.links}>
                            <Link href="/home"><a className={styles.navItems}>Home</a></Link>
                            <Link href="/work.js"><a className={styles.navItems}>Work</a></Link>
                            <Link href="/pages/about.js"><a className={styles.navItems} >About</a></Link>
                            <Link href="/pages/contact.js"><a className={styles.navItems}>Contact</a></Link>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}