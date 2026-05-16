import { useRef, useState } from "react"

export default function NewsLetter() {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [placeholder, setPlaceholder] = useState("you@example.com")

    const clickHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage(null)
        setPlaceholder("you@example.com")

        const email = formRef.current.email.value
        fetch(import.meta.env.VITE_BACKEND + "/newsletter", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then((res) => {
                if (res.status === 200) {
                    formRef.current.reset()
                    setPlaceholder("Subscribed!")
                    setMessage({ type: "success", text: "Thanks for subscribing!" })
                } else if (res.status === 201) {
                    formRef.current.reset()
                    setPlaceholder("Already subscribed")
                    setMessage({ type: "warning", text: "Already subscribed!" })
                } else {
                    throw new Error("Request failed")
                }
            })
            .catch((err) => {
                setMessage({ type: "error", text: "Something went wrong. Please try again." })
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => {
                    setMessage(null)
                    setPlaceholder("you@example.com")
                }, 3000)
            })
    }

    return (
        <div className="flex justify-center py-12 bg-gray-50 mt-12" id="newsletter-section" role="region" aria-labelledby="newsletter-title">
            <div className="flex flex-col gap-4 max-w-xl justify-center items-center text-sm text-gray-600 px-4 sm:p-8 w-full">
                <h2 id="newsletter-title" className="text-2xl font-bold text-gray-900">Stay Updated</h2>
                <p className="paragraph mb-4 text-center max-w-md text-gray-600">
                    Join our newsletter to stay updated about the latest products we've created and discover the great finds we've come across on the internet.
                </p>
                <form ref={formRef} onSubmit={clickHandler} className="w-full max-w-md" noValidate>
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <div className="flex-1 relative">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder={placeholder}
                                required
                                className={`w-full p-3 px-4 rounded-lg border transition-colors ${
                                    message?.type === "success" ? "bg-green-50 border-green-200" :
                                    message?.type === "error" ? "bg-red-50 border-red-200" :
                                    "bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                }`}
                            />
                            {message && (
                                <div className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
                                    message.type === "success" ? "text-green-500" :
                                    message.type === "error" ? "text-red-500" : "text-yellow-500"
                                }`}>
                                    {message.type === "success" ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                loading
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            }`}
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    <span>Sending...</span>
                                </div>
                            ) : "Subscribe"}
                        </button>
                    </div>
                </form>
                <div className="text-sm paragraph p-2 text-center max-w-md text-gray-500">
                    By using our services and products, you agree with our{' '}
                    <a rel="nofollow" href="/terms" className="text-purple-600 hover:underline">Terms of Service</a>{' '}
                    and{' '}
                    <a rel="nofollow" className="text-purple-600 hover:underline" href="/privacy">Privacy Policy</a>.
                </div>
            </div>
        </div>
    );
}
