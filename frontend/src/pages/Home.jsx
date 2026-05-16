import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PricingBoard from '../components/PricingBoard'
import ServiceBoard from '../components/ServiceBoard'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef } from 'react'
import Faq from '../components/Faq'

export default function Home({ login, setLogin }) {
    const pricingRef = useRef(null)
    return (
        <div className="relative flex flex-col min-h-screen">
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#fff_40%,#7c3aed_100%)]" />
            <NavBar login={login} setLogin={setLogin} />
            <Hero login={login} pricingRef={pricingRef} />
            <PricingBoard login={login} pricingRef={pricingRef} />
            <ServiceBoard login={login} />
            <Faq />
            <NewsLetter />
            <Footer />
        </div>
    )
}
