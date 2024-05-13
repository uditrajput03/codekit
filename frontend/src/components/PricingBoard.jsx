import PriceCard from "./PriceCard"
import PriceBar from "./PriceBar"
import { useState } from "react"
export default function PricingBoard({ pricingRef }) {
    const [cardData, setCardData] = useState({
        frontend: {
            id: 1,
            title: "Frontend", description: "Best option for basic frontend for your next project.", price: 3500, specs: [
                "React, HTML, JS"
                , "Tailwind - CSS"
                , "Responsive Design"
                , "Payment Gateway Integration"
                , "Multi Component"]
        },
        backend: {
            id: 2,
            title: "Backend", description: "Best option for lightweight & low-maintanance backend APIs.", price: 5000, specs: [
                "Lightning Fast"
                , "Servelss Architecture"
                , "ORM and database integrated"
                , "Scalable & Secure",
                "Type Saftey"
            ]
        },
        fullstack: {
            id: 3,
            title: "FullStack", description: "Robust and scalable architecture with low maintainance tech stack", price: 8000, specs: [
                "Frontend and Backend"
                , "Payment Gateway Integration"
                , "Serverless Architecture"
                , "Developer friendly"
                , "Secure and Scalable"]
        },
        nextjs: {
            id: 4,
            title: "NextJS", description: "Best option for developer and userfriendly web apps.", price: 10000, specs: [
                "SEO friendly (SSR)"
                , "Secure and Fast"
                , "Frontend and Backend"
                , "Easy to deploy"
                , "Easy to scale"]
        }
    })
    const [card, setCard] = useState(cardData.frontend)
    return (<>
        <div className="flex flex-col justify-center items-center sm:min-w-max gap-5">
            <h2 id="pricingboard" ref={pricingRef} className="mb-4 text-2xl tracking-tight font-bold text-gray-900 sm:text-4xl">Get desired kit for your need</h2>
            <PriceBar setCard={setCard} cardData={cardData} ></PriceBar>
            <PriceCard card={card}></PriceCard>

        </div>
    </>)
}