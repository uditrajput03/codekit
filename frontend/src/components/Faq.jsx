export default function Faq() {
    return (<>
        <div
            className="relative w-full  px-6 pt-10 pb-8 my-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

                    </p>
                </div>
                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> How does the billing work?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offers a onetime payment solutions for respective SaaS templates, It may vary for our custome service plan where we price according to the work done on the project. Payment is typically made through UPI or Wallets
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Can I get a refund for my subscription?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Refunds for
                                our custom freelance services may be considered on a
                                case-by-case basis.You can check more about it <a className="text-blue-800 hover:underline" href="/refund">Refund policy</a>
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>How the process looks like</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">The process is simple, you can choose variety of templates from our explore section, then you can buy the template and get the source code. For custom service you can contact us and we will get back to you with the details.
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span>Can I get Source Code of the templates</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, you can get the source code of the templates , when you buy it from us. Source code will be provided via email or you can download it from the dashboard.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    </>)
}