import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PriceCard from "../components/PriceCard";
import CashFree from "../components/CashFree";
import { useLocation, useNavigate } from "react-router-dom";
export default function Payment({ login, setLogin, productId = 1, card = {
    id: 1,
    title: "Frontend", description: "Best option for personal use & for your next project.", price: 3500, specs: ["Individual configuration"
        , "No setup, or hidden fees"
        , "Team size: 1 developer"
        , "Premium support: 6 months"
        , "Free updates: 6 months"]
} }) {
    const navigate = useNavigate()
    const { state } = useLocation()
    card = state
    console.log("CARERER", state);
    const { id, title, description, price, specs } = card
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState()
    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND + "/auth/profile", {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (res.status == 200) {
                    return res.json()
                }
                else if (res.status == 401) {
                    setAlert(
                        <div class="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                            <span class="font-medium">Warning: </span> Please login before proceeding your order
                        </div>
                    )
                    setTimeout(() => navigate('/login'), 2000)
                }
                else {
                    setAlert(<div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                        <span class="font-medium">Error: </span>Something went wrong. Please try again later
                    </div>)
                }
            })
            .then((res) => {
                if (res) setProfile(res)
            })
    }, [])

    const clickHandler = () => {
        // setLoading((prev) => !prev)
        CashFree(setLoading, setAlert, id)
        // setLoading(false)
    }
    return (<>
        <div className="">
            <NavBar login={login} setLogin={setLogin} />
            <div className="flex justify-center text-center"> {alert}</div>
            <div className="flex  justify-evenly my-10">
                <div className="">
                    <h1 className="text-2xl font-semibold my-5">Customer Details</h1>
                    <Profile profile={profile} />
                    <h1 className="text-xl font-semibold my-5">Payment Options</h1>
                    <button onClick={clickHandler} type="button" className={` text-white ${loading ? "bg-[#050708]/80 hover:bg-[#050708]/70" : "bg-[#050708] hover:bg-[#050708]/90"} hover:bg-[#050708]/90 focuds:ring-4 fodcus:outline-none focsus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2`}>
                        {/* <svg class="w-5 h-5 me-2 -ms-1" src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg> */}
                        <div class={`border-gray-300 ${loading ? "" : "hidden"} animate-spin rounded-full border-2 w-5 h-5 me-2 -ms-1 border-r-zinc-400`} />
                        <img className={`${loading ? "hidden" : ""} w-5 h-5 me-2 -ms-1`} src="https://cashfreelogo.cashfree.com/cashfreepayments/logosvgs/Group_4355.svg" alt="logo" />
                        Pay Now
                    </button>
                </div>

                <div className='relative overflow-hidden max-w-xs rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl mb-20'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='backdrop-blur-3xl'>
                        <div className="flex py-4 px-7 flex-col justify-center items-center bg-white wrap text-center gap-1 border rounded-xl">
                            <h1 className="m-3 text-2xl font-semibold">{title}</h1>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                            <h1 className="m-2 text-5xl font-bold">₹{price}</h1>
                            <div className=" flex flex-col self-start gap-2">
                                {specs.map(e => {
                                    return <>
                                        <li class="flex items-center space-x-3">
                                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                            <span>{e}</span>
                                        </li>
                                    </>
                                })}
                            </div>
                            <div className="m-5">

                                {/* <button class="group  sm:min-w-64 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"><span>Buy Now</span><div class="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}