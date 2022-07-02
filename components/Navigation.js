import Link from "next/link";
import React from "react";
import styles from '../styles/Nav.module.css'
import Image from "next/image";
import ContainerRow from "./ContainerRow";
// import Eyeball from "./Eyeball";

class Navigation extends React.Component {
    state = {}
    render() {
        return (
            <div className={styles.navOuter}>
            <ContainerRow className={styles.navInner}>
                <div className={styles.logo}>
                    <Image className={'logo'} width="190" height="190" alt="" src="/placeholder.png" />
                </div>
                    
                        {/* <Eyeball className={styles.logo}/> */}
                        <Link href="#" ><p className={styles.navItem}>Work</p></Link>
                        <Link href="#" ><p className={styles.navItem}>Playground</p></Link>
                        <Link href="#" ><p className={styles.navItem}>Contact</p></Link>
                        <Link href="#" ><p className={styles.navItem}>CV</p></Link>
                        {/* <Link href="#" ><p className={styles.navItem}>Github</p></Link> */}
              
      

             </ContainerRow>
             </div>
        );
    }
}

export default Navigation;


