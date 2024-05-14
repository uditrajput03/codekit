import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Refund({ login }) {
    return (
        <>
            <NavBar login={login} />

            <div className="flex mt-10 sm:w-2/3 w-4/5 m-auto justify-center flex-col">

                <h1 className="text-3xl sm:mt-0 mt-14 font-bold my-5">Refund Policy</h1>

                <p className="mx-5">At CodeKit, we strive to provide high-quality web boilerplate SaaS code and custom web development services to meet your needs. We understand that sometimes situations arise where a refund may be necessary. Our refund policy is designed to be fair and transparent for both parties.</p>
                <h2 className="text-2xl font-semibold my-5">1. Digital Products (Boilerplate SaaS Code)</h2>
                <h3 className="text-xl font-semibold my-5">1.1. Eligibility for Refunds:</h3>

                <p className="mx-5">Refunds will be considered only if requested within 3 days of purchase.</p>
                <p className="mx-5">The request must include a valid reason, such as the product not functioning as described or significant defects that cannot be resolved.</p>
                <h3 className="text-xl font-semibold my-5">1.2. Non-Eligibility for Refunds:</h3>

                <p className="mx-5">Refunds will not be granted if the product has been significantly altered or customized by the customer.</p>
                <p className="mx-5">Refunds will not be provided for change of mind or accidental purchase.</p>
                <p className="mx-5">Refunds will not be issued if the product has been downloaded or accessed.</p>
                <h3 className="text-xl font-semibold my-5">1.3. Process:</h3>

                <p className="mx-5">To request a refund, please contact our support team at <a className="underline text-blue-800" href="mailto:support@codekit.me">support@codekit.me</a> with your order details and the reason for the refund request.</p>
                <p className="mx-5">I will review your request and respond within 5-7 business days.</p>
                <p className="mx-5">Approved refunds will be processed within 14 business days and credited back to the original method of payment.</p>
                <h2 className="text-2xl font-semibold my-5">2. Custom Development Services</h2>
                <h3 className="text-xl font-semibold my-5">2.1. Initial Consultation and Quotation:</h3>

                <p className="mx-5">An initial consultation and quotation are provided free of charge.</p>
                <p className="mx-5">Once the project scope is agreed upon, a non-refundable deposit of 30% of the total project cost is required to commence work.</p>
                <h3 className="text-xl font-semibold my-5">2.2. Cancellation and Refunds:</h3>

                <p className="mx-5">If the customer decides to cancel the project before work has commenced, a full refund of the deposit will be issued.</p>
                <p className="mx-5">If the project is canceled by the customer after work has commenced but before completion, the refund amount will be prorated based on the work completed up to the point of cancellation.</p>
                <p className="mx-5">No refunds will be issued once the project is completed and delivered to the customer.</p>
                <h3 className="text-xl font-semibold my-5">2.3. Dissatisfaction with Service:</h3>

                <p className="mx-5">If you are not satisfied with the completed project, please contact us within 14 days of delivery. We will work with you to address any concerns and make reasonable revisions as per the agreed project scope.</p>
                <p className="mx-5">Refunds for completed custom projects will be considered only in exceptional cases where the delivered product does not match the agreed specifications and after all revision options have been exhausted.</p>
                <h2 className="text-2xl font-semibold my-5">3. General Conditions</h2>
                <h3 className="text-xl font-semibold my-5">3.1. Chargebacks and Disputes:</h3>

                <p className="mx-5">Initiating a chargeback without contacting our support team first will be considered a breach of this policy. We reserve the right to dispute any chargebacks and provide evidence to the payment processor.</p>
                <h3 className="text-xl font-semibold my-5">3.2. Contact Information:</h3>

                <p className="mx-5">For all refund requests and inquiries, please contact us at <a className="underline text-blue-800" href="mailto:support@codekit.me">support@codekit.me</a>.</p>
                <h3 className="text-xl font-semibold my-5">3.3. Policy Updates:</h3>

                <p className="mx-5">We reserve the right to update or modify this refund policy at any time without prior notice. Any changes will be posted on our website, and the updated policy will apply to all purchases made after the posting date.</p>
                <p className="mx-5">Thank you for choosing CodeKit. We value your business and are committed to providing high-quality products and services. If you have any questions or concerns regarding our refund policy, please do not hesitate to contact us.</p>
            </div>
            <Footer />

        </>
    )
}