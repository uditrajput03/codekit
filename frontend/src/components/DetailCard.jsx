export default function DetailCard({ card }) {
    if (!card) return null

    const { title, description, content } = card

    return (
        <div className="flex flex-col gap-6 my-8 sm:mx-10" aria-labelledby={`detail-${title}`}>
            <h2 id={`detail-${title}`} className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            {content.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <h3 className="px-6 py-4 bg-gray-50 font-semibold text-lg text-gray-900 border-b border-gray-200">
                        {section.heading}
                    </h3>
                    <div className="p-6 grid sm:grid-cols-2 gap-3">
                        {section.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{spec}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
