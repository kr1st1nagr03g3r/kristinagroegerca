
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
                <Link href="#" ><p className={styles.space}>Development</p></Link>           
                <Link href="#" ><p className={styles.space}>Design</p></Link>
                <Link href="#" ><p className={styles.space}>Contact</p></Link>
                <Link href="#" ><p className={styles.space}>CV</p></Link>
                <Link href="#" ><p className={styles.space}>Github</p></Link>

            </div></div>




        );
    }
}

export default Navigation;