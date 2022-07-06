import { Container } from "@mui/system"
import Link from "next/link"
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
<>
        <Container >
        <div className={styles.nav}>
        <Link href="/home"><a className={styles.navItems} >Home</a></Link>
        <Link  href="/work.js"><a className={styles.navItems}>Work</a></Link>
        <Link href="/pages/about.js"><a className={styles.navItems} >About</a></Link>
        <Link  href="/pages/contact.js"><a className={styles.navItems}>Contact</a></Link>
        </div>
        </Container>
</>
    )}