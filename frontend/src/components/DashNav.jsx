export default function DashNav({ active, setActive }) {
    const navItems = [
        { id: "profile", label: "Profile" },
        { id: "orders", label: "Orders" }
    ]

    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" role="tablist">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                        active === item.id
                            ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500"
                            : "text-gray-700 hover:bg-gray-50"
                    }`}
                    role="tab"
                    aria-selected={active === item.id}
                    id={`tab-${item.id}`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    )
}
