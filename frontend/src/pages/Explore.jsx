import { useEffect, useRef } from "react";
import DetailCard from "../components/DetailCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

export default function Explore({ login }) {
    const details = {
        frontend: {
            title: "Frontend",
            description: "This is best starter kit for your SaaS Frontend.",
            content: [
                {
                    heading: "ReactJS", specs: ["Easy to implement Components", "Simple and easy to use pages", "Responsive Design", "Payment Gateway Integration", "Simple State Management"]
                },
                {
                    heading: "Components", specs: ["Navbar", "Footer", "Contact Form", "Login and Register", "Hero Section", "Blog Component", "FAQ, Newsletter Section", "Payment, Profile Board", "Pricing, Features, Services Card"]
                },
                {
                    heading: "Pages", specs: ["Home", "About", "Contact", "Login", "Signup", "Dashboard", "Pricing", "Features", "Services", "Blog", "FAQ", "Newsletter", "Payment", "Profile", "Terms and Services", "Privacy and Policies", "Explore", "Payment Gateway Integration", "404 Page"]
                },
                {
                    heading: "TailwindCSS", specs: ["Easy to tweak design", "Copy and paste classes", "Responsive Design", "Animated UI"]
                },
                {
                    heading: "UI", specs: ["Button - Outlined, Filled, Rounded, Circle", "Input - Text, Password, Email, Number, Textarea", "Alert - Success, Error, Warning, Info", "Modal - Simple, Alert, Confirm", "Loader - Spinner, Bar", "Card - Simple, Feature, Service, Pricing", "Navbar - Simple, Sticky, Dropdown", "Footer - Simple, Sticky", "Hero - Simple, Gradient, Image", "Blog - Simple, Card, Detail", "FAQ - Simple, Accordion", "Newsletter - Simple, Subscription", "Payment - Simple, Gateway", "Profile - Simple, Detail", "Pricing - Simple, Card", "Features - Simple, Card", "Services - Simple, Card", "404 - Simple, Page"]
                },
                {
                    heading: "Libraries", specs: ["React router dom", "Zod", "Axios", "Payment Libraries - Respective", "TailwindCSS", "Vite"]
                }
            ]
        },
        backend: {
            title: "Backend",
            description: "This is robust and low maintainance backend for your SaaS project.",
            content: [{
                heading: "CloudFlare Workers", specs: ["Light Weight", "Support for 0ms cold starts", "Very Fast", "Easy to deploy", "Low maintainance", "Serverless", "Easy to scale", "High performance global network"]
            },
            {
                heading: "Hono JS", specs: ["Very Fast backend library", "Supported on multiple edge networks", "Easy to deploy", "Multi functional", "Inbuild Middlewares", "Inbuld authentication", "Error handeling"]
            },
            {
                heading: "Prisma", specs: ["ORM", "Easy to use", "Support for multiple databases", "Easy to deploy", "Highly secure", "Inbuild authentication", "Error handeling", "Pooled connections"]
            },
            {
                heading: "Typescript", specs: ["Type safe", "Easy to deploy", "Highly secure", "Error handeling", "Elevates Developer Experience"]
            },
            {
                heading: "Libraries", specs: ["CloudFlare Workers", "Hono JS", "Prisma", "Typescript", "Axios", "Zod", "JWT", "Bcrypt", "Dotenv"]
            }
            ]
        },
        fullstack: {
            title: "Fullstack",
            description: "This fullstack kit is scalable, low maintanance and consist of Exceptionally affordable stack.",
            content: [
                {
                    heading: "Frontend", specs: ["Same as above"]
                },
                {
                    heading: "Backend", specs: ["Same as above"]
                },
                {
                    heading: "Integration", specs: ["Api integration", "Database integration", "Payment Gateway integration", "Authentication integration", "Error handeling", "Security integration"]
                }

            ]
        },
        next: {
            title: "Next",
            description: "This is description",
            content: [{
                heading: "Features", specs: ["Integrated Frontend and backend", "Easy deployment", "Easy to scale", "Highly secure", "Error handeling"]
            },
            {
                heading: "Server Side Rendering", specs: ["SEO friendly", "Secure", "Fast", "Elevated User Experience"]
            },
            {
                heading: "MonoRepo", specs: ["Easy to manage", "Code reusability", "Easy to deploy", "Easy to scale"]
            }
            ]
        }
    }
    const frontendRef = useRef(null)
    const backendRef = useRef(null)
    const fullstactRef = useRef(null)
    const nextRef = useRef(null)
    const refElement = useLocation().state?.ref
    useEffect(() => {
        if (refElement != null) {
            if (refElement.toLowerCase() == "frontend") {
                frontendRef.current.scrollIntoView({ behavior: "smooth" })
            }
            else if (refElement.toLowerCase() === "backend") {
                backendRef.current.scrollIntoView({ behavior: "smooth" })
            }
            else if (refElement.toLowerCase() === "fullstack") {
                fullstactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            else if (refElement.toLowerCase() === "nextjs") {
                nextRef.current.scrollIntoView()
            }
        }
    }, [refElement])

    return (<>
        <NavBar login={login} />
        <div className="flex flex-col gap-5 m-auto w-2/3 justify-center">
            <h1 className="text-3xl font-bold mt-16 mb-2 mx-10 self-center">Explore all of our templates in detail.</h1>
            <div ref={frontendRef}>
                <DetailCard card={details.frontend} />
            </div>
            <div ref={backendRef}>
                <DetailCard card={details.backend} />
            </div>
            <div ref={fullstactRef}>

                <DetailCard card={details.fullstack} />
            </div>
            <div ref={nextRef}>
                <DetailCard card={details.next} />
            </div>
        </div >
        <Footer />

    </>)
}