import ServiceCard from "./ServiceCard"

export default function ServiceBoard() {
    return (
        <section className="py-20 px-4 bg-gray-50" id="services" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Give a unique and custom touch to your web app with our services and solutions.
                    </p>
                </div>
                <div className="flex justify-center">
                    <ServiceCard />
                </div>
            </div>
        </section>
    )
}
