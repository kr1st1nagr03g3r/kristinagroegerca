import { Container } from "@mui/system"
import Link from "next/link"
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
<>
        <Container >
        <div className={styles.nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/work.js"><a>Work</a></Link>
        <Link href="/pages/about.js"><a>About</a></Link>
        <Link href="/pages/contact.js"><a>Contact</a></Link>
        </div>
        </Container>
</>
    )}