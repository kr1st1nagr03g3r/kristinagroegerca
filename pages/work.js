import Navigation from '../components/Navigation'
import HeroWork from '../components/HeroWork'
import Clients from '../components/Clients'


export default function Work({ children }) {
    return (
        <>
            <Navigation />
            <HeroWork />
            <Clients />
        </>
    )
}
