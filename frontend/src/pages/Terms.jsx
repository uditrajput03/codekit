import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Terms({ login }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar login={login} />
            <div className="max-w-3xl mx-auto px-4 py-16 sm:mt-0 mt-14">
                <h1 className="text-3xl font-bold text-gray-900 mb-10 pb-4 border-b border-gray-200">
                    Terms and Conditions
                </h1>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Welcome to CodeKit</h2>
                        <p className="text-gray-600 leading-relaxed">
                            These terms and conditions outline the rules and regulations for the use of{' '}
                            <a className="text-purple-600 hover:underline font-medium" href="https://codekit.me">codekit.me</a>.
                            By accessing this website, we assume you accept these terms and conditions. Do not continue to
                            use codekit.me if you do not agree to all of the terms and conditions stated on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We employ the use of cookies. By accessing codekit.me, you agreed to use cookies in agreement
                            with CodeKit's Privacy Policy. Most interactive websites use cookies to let us retrieve the
                            user's details for each visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">License</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Unless otherwise stated, CodeKit and/or its licensors own the intellectual property rights for
                            all material on codekit.me. You must not republish, sell, rent, sub-license, reproduce,
                            duplicate, copy, or redistribute content from codekit.me.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">SaaS Code and Custom Plans</h2>
                        <p className="text-gray-600 leading-relaxed">
                            CodeKit offers web boilerplate SaaS code for front-end, back-end, and full stack development,
                            as well as custom plans for websites. By purchasing our SaaS code, you agree to the terms
                            outlined in the respective license agreement. Custom plan terms will be provided upon inquiry.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Customer Projects</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The scope of work will be defined and agreed upon between CodeKit and the customer.
                            Payment terms will be outlined in the project proposal and are due as agreed upon.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Hyperlinking to Our Content</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Government agencies, search engines, news organizations, and online directory distributors
                            may link to our Website without prior written approval. Other organizations must request
                            approval by emailing us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Content Liability</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We shall not be held responsible for any content that appears on your website. You agree
                            to protect and defend us against all claims that arise on your website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
                        <p className="text-gray-600 leading-relaxed">
                            All information on{' '}
                            <a className="text-purple-600 hover:underline font-medium" href="https://codekit.me">codekit.me</a>
                            {' '}is published in good faith and for general information purpose only. codekit.me does not
                            make any warranties about the completeness, reliability, and accuracy of this information.
                            Any action you take upon the information you find on this website is strictly at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
                        <p className="text-gray-600 leading-relaxed">
                            For any questions about these terms, contact us at{' '}
                            <a className="text-purple-600 hover:underline font-medium" href="mailto:support@codekit.me">
                                support@codekit.me
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
