import { useState } from "react"

export default function PriceBar({ setCard, cardData }) {
    const [active, setActive] = useState("backend")

    const items = [
        { key: "frontend", label: "Frontend" },
        { key: "backend", label: "Backend" },
        { key: "fullstack", label: "FullStack" },
        { key: "nextjs", label: "NextJS" },
    ]

    return (
        <div className="mb-10 max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1" role="tablist">
                {items.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => {
                            setCard(cardData[key])
                            setActive(key)
                        }}
                        className={`flex-1 min-w-[80px] px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                            active === key
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                        role="tab"
                        aria-selected={active === key}
                        aria-controls="pricing-card"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}
