import { useNavigate } from "react-router-dom"

export default function Hero({ login, pricingRef }) {
    const navigate = useNavigate()
    return (
        <div className="flex min-h-[85vh] justify-center items-center px-4">
            <div className="flex flex-col max-w-3xl justify-center items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                    </span>
                    Ship faster with boilerplates
                </div>
                <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                    Collection of Modern{' '}
                    <span className="animate-text-gradient inline-flex bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
                        SaaS Kits
                    </span>
                </h1>
                <p className="mt-4 text-center text-lg sm:text-xl leading-7 text-gray-600 max-w-2xl">
                    Ready-to-use, easy to understand, simple to implement code for your project.
                    All code has proper examples and explanations for easy integration.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => {
                            if (!login) navigate('/signup')
                            else pricingRef.current?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="relative inline-flex h-13 items-center justify-center rounded-xl bg-gray-900 px-8 py-3.5 font-semibold text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        <span className="text-base">Get Started Free</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button
                        onClick={() => navigate('/explore')}
                        className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        Explore Templates
                    </button>
                </div>
                {/* Stats */}
                <div className="mt-12 flex gap-8 sm:gap-16 text-center">
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">4+</div>
                        <div className="text-sm text-gray-500">Templates</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">20+</div>
                        <div className="text-sm text-gray-500">Components</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-500">TypeScript</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
