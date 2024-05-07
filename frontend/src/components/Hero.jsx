import { useNavigate } from "react-router-dom"

export default function Hero({ login, pricingRef }) {
    const navigate = useNavigate()
    return (
        <div className="flex min-h-screen justify-center items-center -mt-10">
            <div className="flex flex-col max-w-2xl justify-center items-center gap-1">

                <h2 className="text-center text-3xl font-medium text-gray-900 sm:text-6xl">Collection of Modern</h2>
                {/* <TextShine text="Saas Kit"></TextShine> */}
                <span className='text-3xl sm:text-6xl font-medium animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent'>
                    Saas Kit</span>
                <p className="mt-6 text-center text-lg leading-6 text-gray-600 ">Ready-to-use, Easy to understand, Simply to implement code for your project. All code has proper examples and explaination for easy integration.</p>
                <button onClick={() => {
                    if (!login) navigate('/signup')
                    else {
                        pricingRef.current.scrollIntoView()
                    }
                }} className='mt-10 relative inline-flex h-12  items-center justify-center rounded-md bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                    <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
                    Get Started
                </button>

            </div>
        </div>
    )
}