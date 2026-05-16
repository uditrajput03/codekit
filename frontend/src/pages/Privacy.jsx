import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Privacy({ login }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar login={login} />
            <div className="max-w-3xl mx-auto px-4 py-16 sm:mt-0 mt-14">
                <h1 className="text-3xl font-bold text-gray-900 mb-10 pb-4 border-b border-gray-200">
                    Privacy Policy
                </h1>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <p className="text-gray-600 leading-relaxed">
                            UR Technologies operates the codekit.me website, which provides web boilerplate SaaS code
                            for front end, backend, and full stack development, as well as custom plans.
                            This page informs visitors regarding our policies with the collection, use, and disclosure
                            of Personal Information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Information Collection and Use</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may require you to provide us with certain personally identifiable information, including
                            but not limited to your name, phone number, and email address. The information we collect
                            will be used to contact or identify you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Log Data</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Whenever you visit our Service, we collect information that your browser sends to us called
                            Log Data. This may include your IP address, browser version, pages visited, time and date
                            of your visit, and other statistics.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Cookies are files with a small amount of data commonly used as an anonymous unique identifier.
                            Our website uses cookies to collect information and improve our Service. You can choose to
                            accept or refuse cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may employ third-party companies to facilitate our Service, provide the Service on our
                            behalf, or assist us in analyzing how our Service is used. These third parties have access
                            to your Personal Information only to perform tasks on our behalf.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We value your trust in providing us your Personal Information and strive to use commercially
                            acceptable means of protecting it. However, no method of transmission over the internet is
                            100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Links to Other Sites</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our Service may contain links to other sites not operated by us. We strongly advise you to
                            review the Privacy Policy of any third-party sites you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our Services do not address anyone under the age of 13. We do not knowingly collect personal
                            information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update our Privacy Policy from time to time. Changes are effective immediately after
                            they are posted on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you have any questions about our Privacy Policy, contact us at{' '}
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
