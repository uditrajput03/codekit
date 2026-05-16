import { useNavigate } from "react-router-dom"

export default function ServiceCard() {
    const navigate = useNavigate()

    const services = [
        { name: "Frontend", tech: "React, TailwindCSS, Vite" },
        { name: "Backend", tech: "Cloudflare Workers, Hono, TypeScript" },
        { name: "Fullstack", tech: "Frontend + Backend Integration" },
        { name: "NextJS", tech: "SSR, Fullstack Framework" },
        { name: "Maintenance", tech: "Website Maintenance & Updates" },
        { name: "Features", tech: "Custom Feature Implementation" },
    ]

    return (
        <div className="relative overflow-hidden max-w-sm w-full rounded-2xl border border-gray-800 p-[2px] mb-20">
            <span className="hidden sm:flex absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Custom Solutions</h3>
                    <p className="text-gray-300 mb-6">Get customized solutions tailored to your needs</p>
                    <ul className="space-y-3 mb-8 text-left" role="list">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-purple-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <div>
                                    <span className="font-medium">{service.name}:</span>
                                    <span className="text-gray-400 ml-1">{service.tech}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full inline-flex sm:min-w-72 h-12 animate-background-shine items-center justify-center rounded-xl border border-gray-700 bg-[linear-gradient(110deg,#1f2937,45%,#374151,55%,#1f2937)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <span>Contact Us</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
