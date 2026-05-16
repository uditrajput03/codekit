import PriceCard from "./PriceCard"
import PriceBar from "./PriceBar"
import { useState } from "react"

export default function PricingBoard({ pricingRef }) {
    const [cardData] = useState({
        frontend: {
            id: 1,
            title: "Frontend", 
            description: "Best option for basic frontend for your next project.", 
            price: 3500, 
            popular: false,
            specs: [
                "React, HTML, JS",
                "TailwindCSS",
                "Responsive Design",
                "Payment Gateway Integration",
                "20+ Components & Pages"
            ]
        },
        backend: {
            id: 2,
            title: "Backend", 
            description: "Best option for lightweight & low-maintenance backend APIs.", 
            price: 5000, 
            popular: true,
            specs: [
                "Lightning Fast",
                "Serverless Architecture",
                "ORM and Database Integrated",
                "Scalable & Secure",
                "Type Safety with TypeScript"
            ]
        },
        fullstack: {
            id: 3,
            title: "FullStack", 
            description: "Robust and scalable architecture with low maintenance tech stack.", 
            price: 8000, 
            popular: false,
            specs: [
                "Frontend and Backend",
                "Payment Gateway Integration",
                "Serverless Architecture",
                "Developer Friendly",
                "Secure and Scalable"
            ]
        },
        nextjs: {
            id: 4,
            title: "NextJS", 
            description: "Best option for developer and user-friendly web apps.", 
            price: 10000, 
            popular: false,
            specs: [
                "SEO Friendly (SSR)",
                "Secure and Fast",
                "Frontend and Backend",
                "Easy to Deploy",
                "Easy to Scale"
            ]
        }
    })
    const [card, setCard] = useState(cardData.backend)

    return (
        <section className="py-20 px-4 bg-white" id="pricing" ref={pricingRef} aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Get the Right Kit for Your Needs
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our collection of production-ready templates.
                    </p>
                </div>
                <PriceBar setCard={setCard} cardData={cardData} />
                <PriceCard card={card} />
            </div>
        </section>
    )
}
