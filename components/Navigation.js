import Link from "next/link";
import React from "react";
import styles from '../styles/Nav.module.css'
import Eyeball from "./Eyeball";


class Navigation extends React.Component {
    state = {}
    render() {
        return (


            <div className={styles.navOuter}>
            <div className={styles.navInner}>
                <Eyeball className={styles.logo}/>
                <Link href="#" ><p className={styles.navItem}>Development</p></Link>           
                <Link href="#" ><p className={styles.navItem}>Design</p></Link>
                <Link href="#" ><p className={styles.navItem}>Contact</p></Link>
                <Link href="#" ><p className={styles.navItem}>CV</p></Link>
                <Link href="#" ><p className={styles.navItem}>Github</p></Link>

            </div></div>




        );
    }
}

export default Navigation;


