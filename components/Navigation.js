import Link from "next/link";
import React from "react";
import styles from '../styles/Nav.module.css'
import Image from "next/image";
import Container from "./Container";
// import Eyeball from "./Eyeball";

class Navigation extends React.Component {
    state = {}
    render() {
        return (
            <div className={styles.navOuter}>
                <div className={styles.logo}>
                    <Image className={'logo'} width="190" height="190" alt="" src="/placeholder.png" />
                </div>
                    <div className={styles.navInner}>
                        {/* <Eyeball className={styles.logo}/> */}
                        <Link href="#" ><p className={styles.navItem}>Work</p></Link>
                        <Link href="#" ><p className={styles.navItem}>Playground</p></Link>
                        <Link href="#" ><p className={styles.navItem}>Contact</p></Link>
                        <Link href="#" ><p className={styles.navItem}>CV</p></Link>
                        {/* <Link href="#" ><p className={styles.navItem}>Github</p></Link> */}
                    </div>
                <div className={styles.third}></div>
            </div>
        );
    }
}

export default Navigation;


