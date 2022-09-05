
import React from 'react';
import styles from '../styles/animatedAssets/AnimateNav.module.css'
import { useInView } from 'react-intersection-observer';
import Starfield from '../components/animatedAssets/Starfield';
import Hero from '../components/Hero';
import Navigation from "../components/Navigation"



export default function Component() {

    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0.5,
    // });


    // this is how to name the variables so you may use multiple on a page.
    const {
        ref: magicSectionRef,
        inView: magicSectionIsVisible } = useInView({
            threshold: 0.3,
        });


    return (
        <>
            <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
                🚀
                <Navigation />
            </span>

            <Hero />
            <span ref={magicSectionRef}>
                <Starfield /></span>


        </>
    )
}