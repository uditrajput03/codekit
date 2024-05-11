import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PricingBoard from '../components/PricingBoard'
import ServiceBoard from '../components/ServiceBoard'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'
export default function Home({ login, setLogin }) {
    const [alert, setAlert] = useState()
    const pricingRef = useRef(null)
    return (<>
        <>
            <div className='relative'>
                <NavBar login={login} setLogin={setLogin}></NavBar>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex fixed justify-center items-center z-50'>
                        <div className="flex left-auto right-auto justify-center items-center text-center"> {alert}</div>
                    </div>
                </div>
                <div className="fixed min-h-screen min-w-max inset-0 -z-10  bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
                <Hero login={login} pricingRef={pricingRef}></Hero>
                <PricingBoard login={login} pricingRef={pricingRef}></PricingBoard>
                <ServiceBoard login={login}></ServiceBoard>
                <NewsLetter setAlert={setAlert}></NewsLetter>
                <Footer></Footer>
            </div>
        </>
    </>)
}