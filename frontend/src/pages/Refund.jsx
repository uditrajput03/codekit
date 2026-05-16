import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Refund({ login }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar login={login} />
            <div className="max-w-3xl mx-auto px-4 py-16 sm:mt-0 mt-14">
                <h1 className="text-3xl font-bold text-gray-900 mb-10 pb-4 border-b border-gray-200">
                    Refund Policy
                </h1>

                <p className="text-gray-600 leading-relaxed mb-8">
                    At CodeKit, we strive to provide high-quality web boilerplate SaaS code and custom web development
                    services. Our refund policy is designed to be fair and transparent for both parties.
                </p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Digital Products (Boilerplate SaaS Code)</h2>
                        
                        <h3 className="text-lg font-medium text-gray-800 mt-4">Eligibility for Refunds</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                            <li>Refunds will only be considered if requested within 3 days of purchase.</li>
                            <li>The request must include a valid reason, such as the product not functioning as described.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Non-Eligibility</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                            <li>Refunds not granted if the product has been significantly altered or customized.</li>
                            <li>No refunds for change of mind or accidental purchase.</li>
                            <li>No refunds if the product has been downloaded or accessed.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Process</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            Contact{' '}
                            <a className="text-purple-600 hover:underline font-medium" href="mailto:support@codekit.me">support@codekit.me</a>
                            {' '}with your order details. We review requests within 5–7 business days.
                            Approved refunds are processed within 14 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Custom Development Services</h2>
                        
                        <h3 className="text-lg font-medium text-gray-800 mt-4">Initial Consultation</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            Free initial consultation and quotation. A 30% non-refundable deposit is required to commence work.
                        </p>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Cancellation and Refunds</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                            <li>Full refund of deposit if canceled before work commences.</li>
                            <li>Prorated refund based on work completed if canceled mid-project.</li>
                            <li>No refunds after project completion and delivery.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Dissatisfaction</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            Contact us within 14 days of delivery for revisions. Refunds for completed projects are
                            considered only in exceptional cases after all revision options are exhausted.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. General Conditions</h2>
                        
                        <h3 className="text-lg font-medium text-gray-800 mt-4">Chargebacks and Disputes</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            Initiating a chargeback without contacting our support team first is a breach of this policy.
                            We reserve the right to dispute any chargebacks.
                        </p>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Contact</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            For all refund requests:{' '}
                            <a className="text-purple-600 hover:underline font-medium" href="mailto:support@codekit.me">support@codekit.me</a>
                        </p>

                        <h3 className="text-lg font-medium text-gray-800 mt-4">Policy Updates</h3>
                        <p className="text-gray-600 leading-relaxed mt-2">
                            We reserve the right to update this refund policy at any time. Changes apply to all
                            purchases made after the posting date.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
