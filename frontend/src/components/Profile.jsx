export default function Profile({ profile }) {
    if (!profile || Object.keys(profile).length === 0) {
        return (
            <div className="flex flex-col gap-4 animate-pulse">
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-6 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-6 bg-gray-200 rounded w-64"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                <p className="text-lg font-medium text-gray-900">
                    {profile.first + " " + profile.last}
                </p>
            </div>
            <div>
                <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                <p className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    {profile.email}
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                        profile.verified 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                    }`}>
                        {profile.verified ? (
                            <>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Verified
                            </>
                        ) : "Not Verified"}
                    </span>
                </p>
            </div>
        </div>
    )
}
