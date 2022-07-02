// import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Animations.module.css';


export default function Home() {
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

    return (

        <div>


            <div ><p>Velit aute esse exercitation minim adipisicing nulla quis nostrud aliqua cupidatat reprehenderit. Minim nulla elit reprehenderit Lorem ad in commodo amet cupidatat magna dolor officia velit. Pariatur quis eiusmod proident veniam minim aliquip minim ut adipisicing cupidatat excepteur.

                Cupidatat in esse tempor est dolore id cillum sint reprehenderit magna eu. Lorem consectetur proident sit et est ex magna officia aliqua. Velit consequat magna amet officia sit pariatur minim nisi non do fugiat irure. Reprehenderit enim aliquip officia commodo eu eu pariatur commodo ea. Tempor culpa ipsum irure quis nisi. Commodo magna eiusmod ex culpa minim non sit nostrud dolore id aute.

                Consectetur qui fugiat ad nisi non laboris mollit. Reprehenderit pariatur in elit laboris ullamco. Non consequat laboris eu cupidatat. Cupidatat velit irure officia ullamco nostrud qui pariatur nisi.

                Tempor exercitation ea velit culpa eu dolore est mollit sunt eiusmod. Excepteur nostrud pariatur ipsum eu duis. Eiusmod ipsum labore labore duis consequat enim fugiat officia ullamco ea veniam. Consectetur sit enim ea irure eiusmod ad adipisicing sunt aute voluptate esse cupidatat.</p></div>

            <div><p>Velit aute esse exercitation minim adipisicing nulla quis nostrud aliqua cupidatat reprehenderit. Minim nulla elit reprehenderit Lorem ad in commodo amet cupidatat magna dolor officia velit. Pariatur quis eiusmod proident veniam minim aliquip minim ut adipisicing cupidatat excepteur.

                Cupidatat in esse tempor est dolore id cillum sint reprehenderit magna eu. Lorem consectetur proident sit et est ex magna officia aliqua. Velit consequat magna amet officia sit pariatur minim nisi non do fugiat irure. Reprehenderit enim aliquip officia commodo eu eu pariatur commodo ea. Tempor culpa ipsum irure quis nisi. Commodo magna eiusmod ex culpa minim non sit nostrud dolore id aute.

                Consectetur qui fugiat ad nisi non laboris mollit. Reprehenderit pariatur in elit laboris ullamco. Non consequat laboris eu cupidatat. Cupidatat velit irure officia ullamco nostrud qui pariatur nisi.

                Tempor exercitation ea velit culpa eu dolore est mollit sunt eiusmod. Excepteur nostrud pariatur ipsum eu duis. Eiusmod ipsum labore labore duis consequat enim fugiat officia ullamco ea veniam. Consectetur sit enim ea irure eiusmod ad adipisicing sunt aute voluptate esse cupidatat.</p></div>

                <div><p>Velit aute esse exercitation minim adipisicing nulla quis nostrud aliqua cupidatat reprehenderit. Minim nulla elit reprehenderit Lorem ad in commodo amet cupidatat magna dolor officia velit. Pariatur quis eiusmod proident veniam minim aliquip minim ut adipisicing cupidatat excepteur.

Cupidatat in esse tempor est dolore id cillum sint reprehenderit magna eu. Lorem consectetur proident sit et est ex magna officia aliqua. Velit consequat magna amet officia sit pariatur minim nisi non do fugiat irure. Reprehenderit enim aliquip officia commodo eu eu pariatur commodo ea. Tempor culpa ipsum irure quis nisi. Commodo magna eiusmod ex culpa minim non sit nostrud dolore id aute.

Consectetur qui fugiat ad nisi non laboris mollit. Reprehenderit pariatur in elit laboris ullamco. Non consequat laboris eu cupidatat. Cupidatat velit irure officia ullamco nostrud qui pariatur nisi.

Tempor exercitation ea velit culpa eu dolore est mollit sunt eiusmod. Excepteur nostrud pariatur ipsum eu duis. Eiusmod ipsum labore labore duis consequat enim fugiat officia ullamco ea veniam. Consectetur sit enim ea irure eiusmod ad adipisicing sunt aute voluptate esse cupidatat.</p></div>

<div><p>Velit aute esse exercitation minim adipisicing nulla quis nostrud aliqua cupidatat reprehenderit. Minim nulla elit reprehenderit Lorem ad in commodo amet cupidatat magna dolor officia velit. Pariatur quis eiusmod proident veniam minim aliquip minim ut adipisicing cupidatat excepteur.

Cupidatat in esse tempor est dolore id cillum sint reprehenderit magna eu. Lorem consectetur proident sit et est ex magna officia aliqua. Velit consequat magna amet officia sit pariatur minim nisi non do fugiat irure. Reprehenderit enim aliquip officia commodo eu eu pariatur commodo ea. Tempor culpa ipsum irure quis nisi. Commodo magna eiusmod ex culpa minim non sit nostrud dolore id aute.

Consectetur qui fugiat ad nisi non laboris mollit. Reprehenderit pariatur in elit laboris ullamco. Non consequat laboris eu cupidatat. Cupidatat velit irure officia ullamco nostrud qui pariatur nisi.

Tempor exercitation ea velit culpa eu dolore est mollit sunt eiusmod. Excepteur nostrud pariatur ipsum eu duis. Eiusmod ipsum labore labore duis consequat enim fugiat officia ullamco ea veniam. Consectetur sit enim ea irure eiusmod ad adipisicing sunt aute voluptate esse cupidatat.</p></div>
<div>
                <div>
                    <h2 ref={magicSectionRef}>
                        Magic 🪄
                    </h2>
                    <p>
                        {/* using template literals */}
                        <span className={`${styles.navOuter} ${magicSectionIsVisible ? styles.animateNav : styles.animateNavOut}`}>
                           
                        </span>
                    </p>
                </div>
            </div>

            <div>
                <div>
                    <h2 ref={magicSectionRef}>
                        Magic 🪄
                    </h2>
                    <p>
                        {/* using template literals */}
                        <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
                            🚀
                        </span>
                    </p>
                </div>
            </div>

            <div >
                <div>
                    <h2 ref={myRef}>
                        Have you scrolled down here yet? 🧐
                    </h2>
                    {/* ? is the ternary operator */}
                    <p>{myElementIsVisible ? 'Yes! 🥳' : 'No 🙈'}</p>
                </div>
            </div>
        </div>
    )
}