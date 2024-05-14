import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from 'react'
export default function Forget({ login, setLogin }) {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [alert, setAlert] = useState()
    const [loading, setLoading] = useState(false)
    const formHandler = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch(import.meta.env.VITE_BACKEND + "/password/forget", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then((res) => {
                if (res.status == 200) {
                    setAlert(
                        <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                            <span className="font-medium">Success: </span> Email sent successfully
                        </div>
                    )
                } else {
                    setAlert(
                        <div className="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                            <span className="font-medium">Warning: </span> Email not found
                        </div>
                    )
                }
            })
            .catch((e) => {
                setAlert(<div className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                    <span className="font-medium">Error: </span>Something went wrong. Please try again later
                </div>)
            })
        setLoading(false)
        formRef.current.reset()
    }
    return (<>
        <NavBar login={login} setLogin={setLogin}></NavBar>
        <div>
            <section className="bg-gray-50 ">
                <div className="flex flex-col items-center justify-center px-6 sm:py-8 py-20 my-24 sm:my-0 mx-auto sm:h-screen">
                    <div className='flex justify-center max-w-xl'>
                        {alert}
                    </div>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Forget Password
                            </h1>
                            <form ref={formRef} onSubmit={formHandler} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5" placeholder="name@company.com" required="true" />
                                </div>
                                {/* <button type="submit" className="w-full text-white bg-zinc-600 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Login</button> */}
                                <button type="submit" className={`${loading ? "bg-zinc-300 hover:bg-zinc-400" : "bg-zinc-600 hover:bg-zinc-700"} justify-center items-center flex w-full text-white  focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                                    <button type="submit" className="">Send Email</button>
                                    <div class={`border-gray-300 ${loading ? "" : "hidden"} ml-2  animate-spin rounded-full border-2 w-4 h-4 border-r-zinc-400`} />
                                </button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <a href="/signup" className="font-medium text-zinc-600 hover:underline ">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>)
}