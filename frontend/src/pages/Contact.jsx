import { useRef, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { AlertSuccess, AlertWarning, AlertError } from "../components/Alert";

export default function Contact({ login }) {
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null)

    function submitHandler(e) {
        e.preventDefault()
        setLoading(true)
        setAlert(null)

        fetch(import.meta.env.VITE_BACKEND + "/contact", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then(res => res.json())
            .then((res) => {
                // FIXED: was using assignment (=) instead of comparison (===)
                if (res.id === 'id' || res.status === 200) {
                    formRef.current?.reset()
                    setAlert(
                        <AlertSuccess message="Contact ticket has been created successfully. We will shortly contact you on your provided email." />
                    )
                } else {
                    setAlert(<AlertWarning message="Something went wrong. Please try again." />)
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
        <NavBar login={login} />
        <div className="flex justify-center text-center">
            {alert}
        </div>
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 sm:mt-0 mt-14 text-4xl tracking-tight font-semibold text-center text-gray-900">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback? Need details about our Business plan? Let us know.
                </p>
                <form onSubmit={submitHandler} ref={formRef} className="space-y-6" noValidate>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-colors"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                            Your message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Leave a comment..."
                            required
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex items-center justify-center gap-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg transition-colors ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
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
                            ) : "Send message"}
                        </button>
                        <div>
                            <a className="underline text-purple-600 text-lg" href="mailto:support@codekit.me">
                                support@codekit.me
                            </a>
                            <h1 className="sm:text-xl mt-2 font-medium">Address:</h1>
                            <h2 className="font-light text-gray-500">UR Technologies</h2>
                            <h2 className="font-light text-gray-500">Bhopal, Madhya Pradesh - 462022</h2>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </>)
}
