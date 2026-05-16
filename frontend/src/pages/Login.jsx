import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"
import { useRef, useState } from 'react'
import { AlertSuccess, AlertWarning, AlertError } from '../components/Alert'

export default function Login({ login, setLogin }) {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setAlert(null)

        fetch(import.meta.env.VITE_BACKEND + "/login", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then(res => res.json())
            .then((res) => {
                if (res.token != null) {
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("loginState", "true")
                    setLogin(true)
                    setAlert(<AlertSuccess message={res.status} />)
                    setTimeout(() => navigate('/dashboard'), 500)
                } else {
                    setAlert(<AlertWarning message={res.status || "Invalid credentials"} />)
                }
            })
            .catch(() => {
                setAlert(<AlertError />)
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => formRef.current?.reset(), 3000)
            })
    }

    return (<>
        <NavBar login={login} setLogin={setLogin} />
        <section className="bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex justify-center max-w-xl">
                    {alert}
                </div>
                <div className="w-full bg-white rounded-xl shadow-lg sm:max-w-md xl:p-0">
                    <div className="p-8 space-y-6">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Welcome back
                        </h1>
                        <p className="text-sm text-gray-500 -mt-2">Login to your account to continue</p>
                        <form ref={formRef} onSubmit={formHandler} className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-colors"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 pr-10 transition-colors"
                                        minLength={8}
                                        maxLength={20}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-purple-500 focus:ring-2"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="/forget" className="text-sm font-medium text-purple-600 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center gap-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors ${loading
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Logging in...
                                    </>
                                ) : "Login"}
                            </button>
                            <p className="text-sm font-light text-gray-500 text-center">
                                Don&apos;t have an account?{' '}
                                <a href="/signup" className="font-medium text-purple-600 hover:underline">
                                    Sign up for free
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}
