import Orders from "./Orders";
import Profile from "./Profile";

export default function DashCard({ active, profile }) {
    if (active === 'profile') {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
                <Profile profile={profile} />
            </div>
        )
    }
    
    if (active === 'orders') {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Orders</h2>
                <Orders />
            </div>
        )
    }
    
    return null
}
