
import { Container } from "@mui/system"
import Link from "next/link"
import { useInView } from 'react-intersection-observer';

export default function Nav() {
    return (
        <>
            <style jsx>{`
            a {
                padding-right: 30px;
            }
            .contact {
                padding-right: 0px !important;
            }

            `} </style>

            <Container
                sx={{
                    background: 'white',
                    height: 100,
                    display: 'flex',

                }} maxWidth={false} disableGutters={true}>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                }}>
                    <div className="logo">
                        <Link href="/"><a><i>Kristina Groeger</i></a></Link>
                    </div>

                    <div className="links">
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/work"><a>Work</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/contact"><a className="contact">Contact</a></Link>
                    </div>
                </Container>
            </Container>

        </>
    )
}