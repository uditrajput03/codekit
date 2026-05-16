import { Link } from "react-router-dom"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="border-t border-gray-100 bg-white mt-auto" role="contentinfo">
            <div className="w-full mx-auto max-w-screen-xl px-4 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-xl font-medium">Code</h1>
                            <h1 className="text-xl font-bold text-purple-700">Kit</h1>
                        </Link>
                        <span className="text-sm text-gray-500">
                            &copy; {currentYear} All Rights Reserved.
                        </span>
                    </div>
                    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-gray-600">
                        <li><a href="/explore" className="hover:text-purple-600 transition-colors">Explore</a></li>
                        <li><a href="/about" className="hover:text-purple-600 transition-colors">About</a></li>
                        <li><a href="/privacy" className="hover:text-purple-600 transition-colors">Privacy</a></li>
                        <li><a href="/terms" className="hover:text-purple-600 transition-colors">Terms</a></li>
                        <li><a href="/refund" className="hover:text-purple-600 transition-colors">Refund</a></li>
                        <li><a href="/contact" className="hover:text-purple-600 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
