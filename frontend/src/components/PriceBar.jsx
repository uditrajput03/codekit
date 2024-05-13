import { useState } from "react"

export default function PriceBar({ setCard , cardData }) {
    const [active, setActive] = useState("frontend")
    return (<>
        <div className="mb-8">
            {/* <div className="sm:hidden">
                <label for="tabs" className="sr-only">Select your template</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Full Stach</option>
                    <option>Invoioce</option>
                </select>
            </div> */}
            <div className="flex flex-col sm:flex-row justify-around">
                <button onClick={() => {
                    setCard(cardData.frontend)
                    setActive("frontend")
                }} className={`px-10 p-4 border-r border-gray-200 rounded-s-lg  ${active == "frontend" ? "bg-gray-100" : "hover:bg-gray-50"}`} aria-current="page">Frontend</button>
                <button onClick={() => {
                    setCard(cardData.backend)
                    setActive("backend")
                }} className={`px-10 p-4  border-r border-gray-200  hover:text-gray-700  ${active == "backend" ? "bg-gray-100" : "hover:bg-gray-50"} `}>Backend</button>
                <button onClick={() => {
                    setCard(cardData.fullstack)
                    setActive("fullstack")
                }} className={`px-10 p-4  border-r border-gray-200  hover:text-gray-700 ${active == "fullstack" ? "bg-gray-100" : "hover:bg-gray-50"}`}>FullStack</button>
                <button onClick={() => {
                    setCard(cardData.nextjs)
                    setActive("nextjs")
                }} className={`px-10 p-4  border-gray-200 rounded-e-lg hover:text-gray-700 ${active == "nextjs" ? "bg-gray-100" : "hover:bg-gray-50"}`}>NextJS</button>
            </div>

        </div>
    </>)
}