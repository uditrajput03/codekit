import { useEffect, useState } from "react";
import { AlertSuccess, AlertWarning, AlertError } from './Alert';

export default function Orders() {
    const [order, setOrder] = useState(null)
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false)

    function clickHandler(orderId) {
        setLoading(true)
        setAlert(null)
        
        fetch(import.meta.env.VITE_BACKEND + "/auth/pay/resend", {
            method: 'post',
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orderId: orderId })
        })
            .then((res) => {
                if (res.ok) {
                    setAlert(<AlertSuccess message="Download link sent successfully to your email." />)
                } else {
                    return res.json().then(data => {
                        setAlert(<AlertWarning message={data.status || "Failed to send email"} />)
                    })
                }
            })
            .catch((e) => {
                setAlert(<AlertError />)
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => { setAlert(null) }, 4000)
            })
    }

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND + "/auth/orders", {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .then((res) => setOrder(res))
            .catch(err => console.error("Error fetching orders:", err))
    }, [])

    if (order === null) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    return (
        <>
            {loading && 
                <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
                </div>
            }
            <div className='mb-4'>
                {alert}
            </div>
            
            <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Order List</h3>
                <p className="text-sm text-gray-500 mb-6">Your purchased products will be sent via email</p>
                
                {order && order.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {order.map((order) => {
                                    const create = new Date(order.createdAt);
                                    return (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 uppercase">
                                                {order.product.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {create.toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                ₹{order.paid}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button 
                                                    onClick={() => clickHandler(order.id)}
                                                    type="button" 
                                                    className="text-sm font-medium text-purple-600 hover:text-purple-900"
                                                    disabled={loading}
                                                >
                                                    Resend
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
                        <p className="mt-1 text-sm text-gray-500">You haven't placed any orders yet.</p>
                        <div className="mt-6">
                            <a href="/explore" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                                Browse Products
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
