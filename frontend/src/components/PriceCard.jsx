import { useNavigate } from "react-router-dom"

export default function PriceCard({ card }) {
    const navigate = useNavigate()
    const { id, title, description, price, specs, popular } = card

    const clickHandler = () => {
        navigate('/payment', { state: card })
    }

    const clickExplore = () => {
        navigate('/explore', { state: { ref: title } })
    }

    return (
        <div id="pricing-card" className="flex justify-center mb-20">
            <div className="relative overflow-hidden max-w-sm w-full rounded-2xl border-2 border-gray-800 p-[2px]">
                {popular && (
                    <div className="absolute top-0 right-0 -mt-3 -mr-3 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white shadow-lg">
                            Popular
                        </span>
                    </div>
                )}
                <span className="hidden sm:flex absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="sm:backdrop-blur-3xl relative">
                    <div className="bg-white rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-500 mb-6">{description}</p>
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-gray-900">₹{price}</span>
                            <span className="text-gray-500 ml-1">one-time</span>
                        </div>
                        <ul className="space-y-3 mb-8 text-left" role="list">
                            {specs.map((spec, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-gray-700">{spec}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={clickHandler}
                                className="w-full inline-flex items-center justify-center h-12 rounded-xl bg-gray-900 text-white font-medium px-6 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                <span>Buy Now</span>
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button
                                onClick={clickExplore}
                                className="w-full inline-flex items-center justify-center h-12 rounded-xl border border-gray-300 text-gray-700 font-medium px-6 hover:bg-gray-50 transition-colors"
                            >
                                <span>More Details</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
