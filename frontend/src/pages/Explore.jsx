import { useEffect, useRef } from "react";
import DetailCard from "../components/DetailCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

export default function Explore({ login }) {
    const details = {
        frontend: {
            title: "Frontend Kit",
            description: "The best starter kit for your SaaS frontend with modern React patterns.",
            content: [
                {
                    heading: "ReactJS", specs: ["Component-based Architecture", "Simple and easy to use pages", "Responsive Design", "Payment Gateway Integration", "State Management"]
                },
                {
                    heading: "Components", specs: ["Navbar", "Footer", "Contact Form", "Login and Register", "Hero Section", "Blog Component", "FAQ, Newsletter Section", "Payment, Profile Board", "Pricing, Feature, Services Card"]
                },
                {
                    heading: "Pages", specs: ["Home", "About", "Contact", "Login", "Signup", "Dashboard", "Pricing", "Features", "Services", "Blog", "FAQ", "Newsletter", "Payment", "Profile", "Terms & Services", "Privacy & Policies", "Explore", "404 Page"]
                },
                {
                    heading: "TailwindCSS", specs: ["Utility-first CSS", "Responsive Design", "Animated UI Components", "Dark Mode Ready"]
                },
                {
                    heading: "Tools & Libraries", specs: ["React Router DOM", "Zod Validation", "Vite Build Tool", "Cashfree Payments", "PostCSS & Autoprefixer"]
                }
            ]
        },
        backend: {
            title: "Backend Kit",
            description: "Robust and low-maintenance backend for your SaaS project using edge computing.",
            content: [{
                heading: "Cloudflare Workers", specs: ["0ms Cold Starts", "Global Edge Network", "Serverless Architecture", "Auto-scaling", "Cost Effective"]
            },
            {
                heading: "Hono.js", specs: ["Ultra-fast Routing", "Edge Runtime Support", "Built-in Middleware", "TypeScript First", "OpenAPI Support"]
            },
            {
                heading: "Prisma ORM", specs: ["Type-safe Queries", "Auto-generated Types", "Multiple Database Support", "Migration System", "Connection Pooling"]
            },
            {
                heading: "Security", specs: ["JWT Authentication", "Password Hashing (bcrypt)", "CORS Protection", "Input Validation", "SQL Injection Prevention"]
            }
            ]
        },
        fullstack: {
            title: "Fullstack Kit",
            description: "Complete scalable stack with frontend and backend integrated seamlessly.",
            content: [
                {
                    heading: "Frontend", specs: ["React + Vite + TailwindCSS", "20+ Pre-built Components", "15+ Pages", "Payment Integration", "Authentication Flow"]
                },
                {
                    heading: "Backend", specs: ["Cloudflare Workers + Hono", "Prisma + Neon PostgreSQL", "JWT Auth + Password Hashing", "Cashfree Payments", "Resend Email"]
                },
                {
                    heading: "Integration", specs: ["API Integration", "Database Integration", "Payment Gateway", "Email Notifications", "Error Handling"]
                }
            ]
        },
        next: {
            title: "Next.js Kit",
            description: "Full-featured Next.js template with server-side rendering and API routes.",
            content: [{
                heading: "Features", specs: ["Integrated Frontend & Backend", "Server-side Rendering (SSR)", "Static Site Generation (SSG)", "API Routes", "Image Optimization"]
            },
            {
                heading: "SEO & Performance", specs: ["SEO Optimized", "Fast Page Loads", "Automatic Code Splitting", "Pre-fetching", "Meta Tags Management"]
            },
            {
                heading: "Developer Experience", specs: ["File-based Routing", "Hot Module Replacement", "TypeScript Support", "Monorepo Friendly", "Easy Deployment"]
            }
            ]
        }
    }

    const frontendRef = useRef(null)
    const backendRef = useRef(null)
    const fullstackRef = useRef(null)
    const nextRef = useRef(null)
    const location = useLocation()
    const refElement = location.state?.ref

    useEffect(() => {
        if (refElement) {
            const refMap = {
                "frontend": frontendRef,
                "backend": backendRef,
                "fullstack": fullstackRef,
                "fullstact": fullstackRef, // Handle typo
                "nextjs": nextRef,
                "next": nextRef
            }
            const targetRef = refMap[refElement.toLowerCase()]
            if (targetRef?.current) {
                targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }, [refElement])

    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar login={login} />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">Explore Our Templates</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the details of each template. Find the perfect starting point for your next project.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div ref={frontendRef}>
                        <DetailCard card={details.frontend} />
                    </div>
                    <div ref={backendRef}>
                        <DetailCard card={details.backend} />
                    </div>
                    <div ref={fullstackRef}>
                        <DetailCard card={details.fullstack} />
                    </div>
                    <div ref={nextRef}>
                        <DetailCard card={details.next} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
