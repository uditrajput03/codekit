import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Privacy({ login }) {

    return (<>
        <NavBar login={login} />
        <div className="flex mt-10 sm:w-2/3 m-auto justify-center flex-col">
            <h1 className="text-3xl font-bold my-5">Privacy Policy</h1>
            <p className="mx-5">
                [Your Company Name] operates the [Your Website Name] website, which provides web boilerplate SaaS code for front end, backend, and full stack development, as well as custom plans for customized designed and styled websites.

                This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the [Your Website Name] website.

                If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <h1 className="text-2xl font-semibold my-5">Information Collection and Use</h1>
            <p className="mx-5">
                For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and email address. The information that we collect will be used to contact or identify you.
            </p>
            <h1 className="text-2xl font-semibold my-5">Log Data</h1>
            <p className="mx-5">
                We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
            </p>
            <h1 className="text-2xl font-semibold my-5">Cookies</h1>
            <p className="mx-5">
                Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.

                Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
            </p>
            <h1 className="text-2xl font-semibold my-5">Service Providers</h1>
            <p className="mx-5">
                We may employ third-party companies and individuals due to the following reasons:

                To facilitate our Service;
                To provide the Service on our behalf;
                To perform Service-related services; or
                To assist us in analyzing how our Service is used.
                We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>
            <h1 className="text-2xl font-semibold my-5">Security</h1>
            <p className="mx-5">
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            <h1 className="text-2xl font-semibold my-5">Links to Other Sites</h1>
            <p className="mx-5">
                Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <h1 className="text-2xl font-semibold my-5">Children's Privacy</h1>
            <p className="mx-5">
                Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>
            <h1 className="text-2xl font-semibold my-5">Changes to This Privacy Policy</h1>
            <p className="mx-5">
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
            <h1 className="text-2xl font-semibold my-5">Contact Us</h1>
            <p className="mx-5">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <h1 className="text-3xl font-bold mt-10">Policy:</h1>

            <h1 className="text-2xl font-semibold my-5">Acceptance of Terms</h1>
            <p className="mx-5">
                By using the services provided by [Your Company Name] on the [Your Website Name] website, you agree to be bound by these Terms and Conditions.
            </p>
            <h1 className="text-2xl font-semibold my-5">Modifications to the Services and Prices</h1>
            <p className="mx-5">
                [Your Company Name] reserves the right to modify or discontinue, temporarily or permanently, the services (or any part thereof) with or without notice at any time. Prices of all services are subject to change upon 30 days notice from us.
            </p>
            <h1 className="text-2xl font-semibold my-5">Intellectual Property</h1>
            <p className="mx-5">
                All code, designs, and content provided by [Your Company Name] remain the intellectual property of [Your Company Name] and may not be resold or redistributed without permission.
            </p>
            <h1 className="text-2xl font-semibold my-5">Customer Responsibilities</h1>
            <p className="mx-5">
                Customers are responsible for providing accurate and complete information for custom projects. Any delays caused by incomplete or inaccurate information provided by the customer may result in project timeline adjustments.
            </p>
            <h1 className="text-2xl font-semibold my-5">Payment</h1>
            <p className="mx-5">
                Payment for services is due as outlined in the project proposal or contract. Failure to make payments may result in the suspension or termination of services.
            </p>
            <h1 className="text-2xl font-semibold my-5">Refund Policy</h1>
            <p className="mx-5">
                Refunds for SaaS code purchases are subject to the terms outlined in the respective license agreement. Refunds for custom projects are subject to the terms outlined in the project proposal or contract.
            </p>
            <h1 className="text-2xl font-semibold my-5">Limitation of Liability</h1>
            <p className="mx-5">
                [Your Company Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use any of the services provided.
            </p>
            <h1 className="text-2xl font-semibold my-5">Governing Law</h1>
            <p className="mx-5">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
            </p>
        </div>
        <Footer />
    </>)
}