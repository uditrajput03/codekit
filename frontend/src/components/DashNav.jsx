import { useState } from "react"

export default function DashNav({active , setActive}) {
    return (<>
        <div className="flex flex-col gap-2">
            <button onClick={() => {
                // setCard(cardData.fullstack)
                setActive("profile")
            }} className={`px-10 p-4  border-r border-gray-200  hover:text-gray-700  ${active == "profile" ? "bg-gray-100" : "hover:bg-gray-50"}`}>Profile</button>
            <button onClick={() => {
                // setCard(cardData.fullstack)
                setActive("orders")
            }} className={`px-10 p-4  border-r border-gray-200  hover:text-gray-700  ${active == "orders" ? "bg-gray-100" : "hover:bg-gray-50"}`}>Orders</button>
        </div>
    </>)
}