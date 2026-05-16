import { useParams, Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Download({ login }) {
    const { orderId } = useParams()

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar login={login} />
            <div className="flex items-center justify-center min-h-[80vh] px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Download is Ready</h1>
                    <p className="text-gray-600 mb-4">
                        Order #{orderId} has been processed. Your source code is available for download.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <p className="text-sm text-gray-500 mb-3">
                            If the download doesn't start automatically, click the button below.
                        </p>
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400">
                        Having trouble?{' '}
                        <a href="/contact" className="text-purple-600 hover:underline font-medium">
                            Contact support
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
