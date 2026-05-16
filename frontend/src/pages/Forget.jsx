import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'
import { AlertSuccess, AlertWarning, AlertError } from '../components/Alert'

export default function Forget({ login, setLogin }) {
    const formRef = useRef(null)
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setAlert(null)

        fetch(import.meta.env.VITE_BACKEND + "/password/forget", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then((res) => {
                if (res.ok) {
                    setAlert(<AlertSuccess message="Reset email sent successfully. Please check your inbox." />)
                } else {
                    return res.json().then(data => {
                        setAlert(<AlertWarning message={data.status || "Email not found"} />)
                    })
                }
            })
            .catch(() => {
                setAlert(<AlertError />)
            })
            .finally(() => {
                setLoading(false)
                formRef.current?.reset()
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
                            Forgot your password?
                        </h1>
                        <p className="text-sm text-gray-500 -mt-2">
                            No worries! Enter your email and we&apos;ll send you a reset link.
                        </p>
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
                                        Sending...
                                    </>
                                ) : "Send Reset Link"}
                            </button>
                            <p className="text-sm font-light text-gray-500 text-center">
                                Remember your password?{' '}
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
