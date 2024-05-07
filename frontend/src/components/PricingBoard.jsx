import PriceCard from "./PriceCard"
import PriceBar from "./PriceBar"
import { useState } from "react"
export default function PricingBoard({pricingRef}){
    const [cardData, setCardData] = useState({
        frontend: {
            title: "Frontend", description: "Best option for personal use & for your next project.", price: 3500, specs: ["Individual configuration"
                , "No setup, or hidden fees"
                , "Team size: 1 developer"
                , "Premium support: 6 months"
                , "Free updates: 6 months"]
        },
        backend: {
            title: "Backend", description: "Best option for personal use & for your next project.", price: 5000, specs: ["Individual configuration"
                , "No setup, or hidden fees"
                , "Team size: 1 developer"
                , "Premium support: 6 months"
                , "Free updates: 6 months"]
        },
        fullstack: {
            title: "FullStack", description: "Best option for personal use & for your next project.", price: 8000, specs: ["Individual configuration"
                , "No setup, or hidden fees"
                , "Team size: 1 developer"
                , "Premium support: 6 months"
                , "Free updates: 6 months"]
        },
        nextjs: {
            title: "NextJS", description: "Best option for personal use & for your next project.", price: 10000, specs: ["Individual configuration"
                , "No setup, or hidden fees"
                , "Team size: 1 developer"
                , "Premium support: 6 months"
                , "Free updates: 6 months"]
        }
    })
    const [card , setCard] = useState(cardData.frontend)
    return(<>
    <div className="flex flex-col justify-center items-center sm:min-w-max gap-5"> 
    <h2 id="pricingboard" ref={pricingRef} class="mb-4 text-2xl tracking-tight font-bold text-gray-900 sm:text-4xl">Get desired kit for your need</h2>
<PriceBar setCard = {setCard} cardData = {cardData} ></PriceBar>
<PriceCard card = {card}></PriceCard>

    </div>
    </>)
}