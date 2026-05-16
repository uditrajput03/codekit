import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import PriceCard from "../components/PriceCard";
import CashFree from "../components/CashFree";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment({ login, setLogin, productId = 1, card = {
    id: 1,
    title: "Frontend", 
    description: "Best option for personal use & for your next project.", 
    price: 3500, 
    specs: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months"
    ]
} }) {
    const navigate = useNavigate()
    const { state } = useLocation()
    if (state) card = state
    
    const { id, title, description, price, specs } = card
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND + "/auth/profile", {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else if (res.status === 401) {
                    setAlert({
                        type: "warning",
                        message: "Please login before proceeding with your order"
                    })
                    setTimeout(() => navigate('/login'), 2000)
                    return null
                } else {
                    setAlert({
                        type: "error", 
                        message: "Something went wrong. Please try again later"
                    })
                    return null
                }
            })
            .then((res) => {
                if (res) setProfile(res)
            })
            .catch(err => {
                setAlert({
                    type: "error",
                    message: "Something went wrong. Please try again later"
                })
            })
    }, [navigate])

    const clickHandler = () => {
        setLoading(true)
        CashFree(setLoading, setAlert, id)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar login={login} setLogin={setLogin} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {alert && (
                    <div className="mb-6">
                        {alert.type === "success" && (
                            <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                                <span className="font-medium">Success: </span> {alert.message}
                            </div>
                        )}
                        {alert.type === "warning" && (
                            <div className="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                                <span className="font-medium">Warning: </span> {alert.message}
                            </div>
                        )}
                        {alert.type === "error" && (
                            <div className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                                <span className="font-medium">Error: </span> {alert.message}
                            </div>
                        )}
                    </div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Customer Details</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                            <Profile profile={profile} />
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h2>
                        <button 
                            onClick={clickHandler} 
                            type="button" 
                            disabled={loading}
                            className={`w-full flex items-center justify-center gap-2 text-white font-medium rounded-lg text-sm px-5 py-3 transition-colors ${
                                loading 
                                    ? "bg-gray-400 cursor-not-allowed" 
                                    : "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <img className="w-5 h-5 mr-2" src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="Cashfree logo" />
                                    Pay Now
                                </>
                            )}
                        </button>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className='relative overflow-hidden max-w-full rounded-xl border border-gray-800 p-[1px]'>
                            <span className='hidden sm:flex absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                            <div className='sm:backdrop-blur-3xl'>
                                <div className="flex py-6 px-8 flex-col justify-center items-center bg-white text-center gap-4 border rounded-xl">
                                    <h1 className="text-3xl font-bold">{title}</h1>
                                    <p className="font-light text-gray-500 sm:text-lg">{description}</p>
                                    <h1 className="text-5xl font-bold">₹{price}</h1>
                                    <div className="w-full text-left">
                                        <ul className="space-y-3">
                                            {specs.map((spec, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
