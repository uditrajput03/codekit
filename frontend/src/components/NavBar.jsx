import { memo, useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export default memo(function NavBar({ login, setLogin }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [drop, setDrop] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDrop(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false)
    }, [location.pathname])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('loginState')
        setLogin(false)
        navigate('/')
    }

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Explore", to: "/explore" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav className="text-black sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100" role="navigation" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center" aria-label="CodeKit Home">
                        <h1 className="text-2xl font-medium">Code</h1>
                        <h1 className="text-2xl font-bold text-purple-700">Kit</h1>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden sm:flex items-center gap-1">
                        {navLinks.map(({ label, to }) => (
                            <Link key={to} to={to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(to)
                                        ? "bg-purple-50 text-purple-700"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons (Desktop) */}
                    <div className="hidden sm:flex items-center gap-2">
                        {login ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setDrop((prev) => !prev)}
                                    className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    aria-label="Account menu"
                                    aria-expanded={drop}
                                    aria-haspopup="true"
                                >
                                    <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>
                                </button>
                                {drop && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-fade-in">
                                        <button
                                            onClick={() => navigate('/dashboard')}
                                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            Dashboard
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="px-5 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors">
                                        Sign up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="sm:hidden border-t border-gray-100 bg-white animate-fade-in">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map(({ label, to }) => (
                            <Link key={to} to={to}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(to)
                                        ? "bg-purple-50 text-purple-700"
                                        : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-gray-100 mt-2">
                            {login ? (
                                <div className="space-y-1">
                                    <Link to="/dashboard"
                                        className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-2 pt-1">
                                    <Link to="/login" className="flex-1">
                                        <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-lg">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="/signup" className="flex-1">
                                        <button className="w-full px-4 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
})
