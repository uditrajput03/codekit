import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PricingBoard from '../components/PricingBoard'
import ServiceBoard from '../components/ServiceBoard'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'
export default function Home({login , setLogin}) {
    const pricingRef = useRef(null)
    return (<>
        <>
            <div className='relative'>
                <div className="fixed min-h-screen min-w-max inset-0 -z-10  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
                <NavBar login={login} setLogin={setLogin}></NavBar>
                <Hero login={login} pricingRef={pricingRef}></Hero>
                <PricingBoard login={login} pricingRef={pricingRef}></PricingBoard>
                <ServiceBoard login={login}></ServiceBoard>
                <NewsLetter></NewsLetter>
                <Footer></Footer>
            </div>
        </>
    </>)
}