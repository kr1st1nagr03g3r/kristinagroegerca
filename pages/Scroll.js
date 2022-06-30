// import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Nav.module.css'

export default function Home() {
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
   
    return (

        <div>
            <div>
                <div>
                    <h2 ref={magicSectionRef}>
                        Magic 🪄
                    </h2>
                    <p>
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

                    <p>{myElementIsVisible ? 'Yes! 🥳' : 'No 🙈'}</p>
                </div>
            </div>
        </div>
    )
}