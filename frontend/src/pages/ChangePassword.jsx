import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from "react-router-dom"
import { useRef, useState } from 'react'
import { AlertSuccess, AlertWarning, AlertError } from '../components/Alert'

export default function ChangePassword({ login, setLogin }) {
    const params = useParams()
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setAlert(null)

        const formData = new FormData(formRef.current)
        const password = formData.get('password')
        if (password.length < 8 || password.length > 20) {
            setAlert(<AlertWarning message="Password must be between 8 and 20 characters" />)
            setLoading(false)
            return
        }

        formData.set("token", params.token)

        fetch(import.meta.env.VITE_BACKEND + "/password/reset", {
            method: "post",
            body: formData
        })
            .then((res) => {
                if (res.ok) {
                    setAlert(<AlertSuccess message="Password updated successfully! Redirecting to login..." />)
                    setTimeout(() => navigate('/login'), 2000)
                } else {
                    return res.json().then(data => {
                        setAlert(<AlertWarning message={data.status || "Invalid or expired token"} />)
                    })
                }
            })
            .catch(() => {
                setAlert(<AlertError />)
            })
            .finally(() => {
                setLoading(false)
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
                            Reset Password
                        </h1>
                        <p className="text-sm text-gray-500 -mt-2">Enter your new password below</p>
                        <form ref={formRef} onSubmit={formHandler} className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        autoComplete="new-password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 pr-10 transition-colors"
                                        placeholder="••••••••"
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
                                <p className="mt-1 text-xs text-gray-400">Must be 8-20 characters</p>
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
                                        Updating...
                                    </>
                                ) : "Set Password"}
                            </button>
                            <p className="text-sm font-light text-gray-500 text-center">
                                Already have an account?{' '}
                                <a href="/login" className="font-medium text-purple-600 hover:underline">
                                    Login here
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
