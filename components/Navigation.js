import { Container } from "@mui/system"
import Link from "next/link"
import styles from '../styles/Nav.module.css'
import Eye from "../components/animatedAssets/Eyeball.js"

export default function Nav() {
    return (
        <>

            <div className={styles.max}>
                <Container>
                    <div className={styles.nav}>
                        <div className={styles.relativeContainer}>
                            <div className={styles.logo}>
                                <Link href="/"><a><i>Kristina Groeger</i></a></Link>
                            </div>
                        </div>

                        <div className={styles.links}>
                            <Link href="/"><a className={styles.navItems}>Home</a></Link>
                            <Link href="/work.js"><a className={styles.navItems}>Work</a></Link>
                            <Link href="/pages/about.js"><a className={styles.navItems} >About</a></Link>
                            <Link href="/pages/contact.js"><a className={styles.navItems}>Contact</a></Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}