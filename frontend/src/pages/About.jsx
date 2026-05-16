import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About({ login }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar login={login} />
            <div className="max-w-4xl mx-auto px-4 py-16 sm:mt-0 mt-14">
                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About CodeKit</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We build production-ready SaaS boilerplates so you can ship faster and focus on what matters.
                    </p>
                </div>

                {/* Story */}
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            About the Author
                        </h2>
                        <div className="ml-13 pl-16 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                CodeKit is built by a solo developer and freelance web developer under UR Technologies. 
                                The boilerplate code on this website has been battle-tested across numerous freelance projects, 
                                helping to ship client products in days rather than weeks.
                            </p>
                            <p>
                                If you have any business inquiries, feel free to reach out at{' '}
                                <a className="text-purple-600 hover:underline font-medium" href="mailto:admin@codekit.me">
                                    admin@codekit.me
                                </a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </span>
                            Our Philosophy
                        </h2>
                        <div className="ml-13 pl-16 space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Some say boilerplates decrease the learning curve. We disagree. If you understand the code once 
                                and how it works, rewriting the same patterns repeatedly is wasted time. Similar to using AI 
                                tools like GitHub Copilot — if you know how to solve a problem, why not leverage existing solutions 
                                to improve efficiency?
                            </p>
                            <p>
                                Our goal is to help developers ship faster while maintaining code quality and security. 
                                Use our boilerplates as a foundation, then build something amazing on top.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </span>
                            Key Benefits
                        </h2>
                        <div className="ml-13 pl-16">
                            <ul className="space-y-3">
                                {[
                                    "Ship products in days instead of weeks",
                                    "Battle-tested code from real freelance projects",
                                    "Maintain consistency and security across projects",
                                    "Reduce burnout from repetitive coding tasks",
                                    "Focus on learning new technologies instead of boilerplate",
                                    "Production-ready from day one"
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
