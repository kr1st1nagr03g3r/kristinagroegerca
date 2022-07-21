import Image from "next/image"
import Images from "../../public/home/index.js"
import styles from "../../styles/Nav.module.css"

export default function Eye() {

    return (
        <div className={styles.relativeContainer}>
            <div className={styles.logo}>

                <div className={styles.eye}>
                    <Image id="eye" src={Images.eye} alt="" width="100" height="100" />
                </div>
                <div className={styles.eyeball}>
                    <Image id="eyeball" src={Images.eyeball} alt="" width="40" height="40" />
                </div>

            </div>
        </div>)
}