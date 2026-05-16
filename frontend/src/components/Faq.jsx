import { useState } from "react"

const faqs = [
    {
        question: "How does the billing work?",
        answer: "We offer one-time payment solutions for our SaaS templates. For our custom service plans, we price according to the scope of work on each project. Payment is typically made through UPI, bank transfer, or wallets via our secure CashFree payment gateway."
    },
    {
        question: "Can I get a refund?",
        answer: "Refunds are considered on a case-by-case basis within 3 days of purchase. You can read our full refund policy or contact us for specific cases."
    },
    {
        question: "How does the process work?",
        answer: "It's simple! Browse our Explore section to find the right template for your needs, purchase it, and you'll receive the source code via email or through your dashboard. For custom projects, contact us and we'll get back to you with a detailed proposal."
    },
    {
        question: "Do I get the source code?",
        answer: "Yes! Every template purchase includes full, unobfuscated source code. You'll receive it via email or can download it directly from your dashboard. The code is yours to use, modify, and deploy as needed."
    },
    {
        question: "What tech stack is used?",
        answer: "Our frontend kits use React, Vite, TailwindCSS, and React Router. Backend kits use Cloudflare Workers, Hono.js, Prisma ORM, and Neon PostgreSQL. Everything is TypeScript-ready and production-tested."
    },
    {
        question: "Do you offer support after purchase?",
        answer: "Yes! Each template comes with 6 months of premium support. You can reach us via email at support@codekit.me for any questions or issues related to your purchased templates."
    }
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="py-20 px-4 bg-white" id="faq" aria-labelledby="faq-heading">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Everything you need to know about our products and services.
                    </p>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                        Still have questions?{' '}
                        <a href="/contact" className="text-purple-600 font-medium hover:underline">
                            Contact us
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
