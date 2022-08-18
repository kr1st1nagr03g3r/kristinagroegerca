

import Container from "@mui/material/Container"
import styles from "../styles/Clients.module.css"
import Hero from "../components/Hero.js"

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
                    <h2 className={styles.header}>Major Clientele and Brand Experience</h2>
                    <Hero></Hero>
                </Container>
            </>
        );
    }
}

