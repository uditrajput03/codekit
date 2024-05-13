import { memo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default memo(function NavBar({ login, setLogin }) {
    const navigate = useNavigate()
    const [drop, setDrop] = useState(false)
    return <>
        <nav className="text-black">
            <div className="grid h-16 sm:grid-cols-3 my-6 sm:my-0 items-center gap-3 sm:gap-0">
                {/* <div className="flex h-16 flex-row justify-around items-center"> */}
                    <Link to={'/'}>
                        <div className="flex flex-row justify-center">
                            <h1 className="text-black text text-2xl">Code</h1>
                            <h1 className="text-violet-800 font-semibold text text-2xl">Kit</h1>
                        </div>
                    </Link>
                <div className="flex justify-center">
                    <Link to={"/"}>
                        <li className="px-3">Home</li>
                    </Link>
                    <Link to={"/explore"}>
                        <li className="px-3">Explore</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="px-3">About</li>
                    </Link>
                </div>
                <div className="flex my-2 justify-center flex-row items-center flex-wrap">
                    {login ? (<div className="relative">
                        <svg onClick={() => setDrop((prev) => !prev)} className="w-5 xmx-[75px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                        <div className={`flex justify-center bg-white sm:bg-transparent py-2 flex-col absolute -left-10 ${drop ? "" : "hidden"}`}>
                            <button>
                                <a onClick={() => navigate('/dashboard')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                            </button>
                            <button>
                                <a onClick={() => {
                                    localStorage.clear('token')
                                    setLogin(false)
                                    window.location.reload()
                                }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</a>
                            </button>
                            {/* </ul> */}
                        </div>
                    </div>) : (<><Link to={"/login"}>
                        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center     ">Login</button>
                    </Link>
                        <Link to={"/signup"}>
                            <button type="button" className="mx-1 my-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5    ">Signup</button>
                        </Link></>)

                    }
                </div>
            </div>
        </nav>
    </>
})