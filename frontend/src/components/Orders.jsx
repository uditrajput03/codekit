import { useEffect, useState } from "react";

export default function Orders() {
    const [order, setOrder] = useState(null)
    const [alert, setAlert] = useState()
    const [loading, setLoading] = useState(false)
    function clickHandler(orderId) {
        setLoading(true)
        fetch(import.meta.env.VITE_BACKEND + "/auth/pay/resend", {
            method: 'post',
            headers: {
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify({ orderId: orderId })
        })
            .then((res) => {
                if (res.status == 200) {
                    setAlert(
                        <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                            <span className="font-medium">Success: </span> Email sent successfully
                        </div>
                    )
                } else {
                    setAlert(
                        <div className="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                            <span className="font-medium">Warning: </span> Email not found
                        </div>
                    )
                }
            })
            .catch((e) => {
                setAlert(<div className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                    <span className="font-medium">Error: </span>Something went wrong. Please try again later
                </div>)
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => { setAlert(null) }, 3000)
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
            .then((res) => (setOrder(res)))
    }, [])
    if (order == null) {
        return (<div className="flex justify-center w-full  items-center h-screen">
            <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-gray-900"></div>
        </div>)
    }
    else {
        return (<>
        {loading && 
            <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center">
            </div>
        }
            <div className='fixed mx-auto'>
                {alert}
            </div>
            <div className="flex flex-col justify-center w-full px-10">


                <div className="font-semibold py-2">Order list</div>
                <h1 className="text-base font-light text-gray-700">Orders will be sent via email</h1>
                {order != null ? order.map((order) => {
                    let create = new Date(order.createdAt);
                    return (
                        <div key={order.id} className="flex sm:justify-evenly px-2 gap-5 sm:gap-0 sm:px-10 py-5 border-b-[1px] border-gray-300">
                            <div className="w-1/2">
                                <div className="font-semibold">Order id: {order.id}</div>
                                <div className="font-semibold">Title:</div>
                                <div className="text-2xl font-light uppercase">{order.product.title}</div>
                            </div>
                            <div className="">
                                <div className="font-semibold">Created: {create.toLocaleString()}</div>
                                <div className="font-semibold">Price:</div>
                                <div className="text-2xl font-light">
                                    ₹{order.paid}
                                    <button onClick={() => clickHandler(order.id)} type="button" className="ml-5 my-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2" disabled={loading}>{"Resend"}</button>
                                </div>
                            </div>
                        </div>)
                }) : <div className="text-center"></div>}
            </div>
        </>)
    }

}