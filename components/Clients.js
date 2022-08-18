

import Container from "@mui/material/Container"
import styles from "../styles/Clients.module.css"
import images from "../public/clients/index.js"
import Image from "next/image"
import Link from "next/link"


const props = {
    header: 'woo',
    intro: 'Hello, I\'m Kristina Groeger 👋🏻.',
    headertext: ' I\'m a UIX Developer & Designer with over 10 years of experience. \n I build front-end experiences and solutions with a focus on accessibility, interaction, and ease of use.',
    buttontext: 'Have a Look'
}

export default function Clients() {
    {

        return (
            <>

                <Container>
                    <div className={styles.relative}>
                        <div className={styles.relative}>
                            <div className={styles.clients}>
                                <div className={styles.positionCANLOGO}>
                                    <Link href="/" >
                                        <div className={styles.canadaLogo}>
                                            <Image className="canadaLogo"
                                                width={120}
                                                height={120}
                                                src={images.canadaLogo}
                                                alt=" Canada logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionCAPLOGO}>
                                    <Link href="/" >
                                        <div className={styles.capitalOneLogo}>
                                            <Image className="capitalOneLogo"
                                                width={120}
                                                height={120}
                                                src={images.capitalOneLogo}
                                                alt=" Capital One logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionINTLOGO}>
                                    <Link href="/" >
                                        <div className={styles.intuitLogo}>
                                            <Image className="intuitLogo"
                                                width={120}
                                                height={120}
                                                src={images.intuitLogo}
                                                alt=" Intuit logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionKALOGO}>
                                    <Link href="/" >
                                        <div className={styles.kitchenaidLogo}>
                                            <Image className="kitchenaidLogo"
                                                width={120}
                                                height={120}
                                                src={images.kitchenaidLogo}
                                                alt="Kitchenaid logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionLOBLOGO}>
                                    <Link href="/" >
                                        <div className={styles.loblawsLogo}>
                                            <Image className="loblawsLogo"
                                                width={120}
                                                height={120}
                                                src={images.loblawsLogo}
                                                alt="Loblaws logo"
                                            />
                                        </div>
                                    </Link>
                                </div>


                                <div className={styles.positionMAYLOGO}>
                                    <Link href="/" >
                                        <div className={styles.maytagLogo}>
                                            <Image className="maytagLogo"
                                                width={120}
                                                height={120}
                                                src={images.maytagLogo}
                                                alt="Maytag logo"
                                            />
                                        </div>
                                    </Link>
                                </div>


                                <div className={styles.positionMCGLOGO}>
                                    <Link href="/" >
                                        <div className={styles.universityOfMcGillLogo}>
                                            <Image className="universityOfMcGillLogo"
                                                width={120}
                                                height={120}
                                                src={images.universityOfMcGillLogo}
                                                alt="University of McGill logo"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className={styles.positionWPLOGO}>
                                    <Link href="/" >
                                        <div className={styles.whirlpoolLogo}>
                                            <Image className="whirlpoolLogo"
                                                width={120}
                                                height={120}
                                                src={images.whirlpoolLogo}
                                                alt="Whirlpool  logo"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

