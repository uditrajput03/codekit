import { useState } from "react"

export default function PriceBar({ setCard , cardData }) {
    const [active, setActive] = useState("frontend")
    return (<>
        <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-around">
                <button onClick={() => {
                    setCard(cardData.frontend)
                    setActive("frontend")
                }} className={`px-10 p-4 border-b sm:border-b-0 sm:border-r border-gray-200 sm:rounded-s-lg  ${active == "frontend" ? "bg-gray-100" : "hover:bg-gray-50"}`} aria-current="page">Frontend</button>
                <button onClick={() => {
                    setCard(cardData.backend)
                    setActive("backend")
                }} className={`px-10 p-4  border-b sm:border-r sm:border-b-0 border-gray-200  hover:text-gray-700  ${active == "backend" ? "bg-gray-100" : "hover:bg-gray-50"} `}>Backend</button>
                <button onClick={() => {
                    setCard(cardData.fullstack)
                    setActive("fullstack")
                }} className={`px-10 p-4  border-b sm:border-r sm:border-b-0 border-gray-200  hover:text-gray-700 ${active == "fullstack" ? "bg-gray-100" : "hover:bg-gray-50"}`}>FullStack</button>
                <button onClick={() => {
                    setCard(cardData.nextjs)
                    setActive("nextjs")
                }} className={`px-10 p-4  border-gray-200 sm:rounded-e-lg hover:text-gray-700 border-b sm:border-none ${active == "nextjs" ? "bg-gray-100" : "hover:bg-gray-50"}`}>NextJS</button>
            </div>

        </div>
    </>)
}