import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function NotFound({ login }) {
    const navigate = useNavigate();
    return (<>
        <NavBar login={login} />
        <div className="flex flex-col items-center justify-center min-h-screen bg-white -mt-16">
            <div className="text-center px-4">
                <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
                    404
                </h1>
                <div className="bg-purple-600 px-4 text-sm rounded rotate-12 absolute inline-block -mt-24 ml-2">
                    <span className="text-white">Page Not Found</span>
                </div>
                <div className="mt-12">
                    <p className="text-xl font-medium text-gray-600 mb-2">
                        Oops! The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <p className="text-gray-500 mb-8">
                        It might have been moved or deleted. Let&apos;s get you back on track.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-lg font-medium transition-colors"
                        >
                            Go Home
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}
