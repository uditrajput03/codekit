import { useEffect, useState } from "react";

export default function Orders() {
    const [order, setOrder] = useState(null)
    useEffect(() =>{
        fetch(import.meta.env.VITE_BACKEND + "/auth/orders" , {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then((res) => res.json())
        .then((res) => (setOrder(res)))
    } , [])
    return (<>
        <div className="flex flex-col justify-center w-full px-10">
            <div className="font-semibold py-2">Order list</div>
            { order !=null ? order.map((order) => {
                let create = new Date(order.createdAt);
                return (
                    <div className="flex sm:justify-evenly px-2 gap-5 sm:gap-0 sm:px-10 py-5 border-b-[1px] border-gray-300">
                        <div className="w-1/2">
                            <div className="font-semibold">Order id: {order.id}</div>
                            <div className="font-semibold">Title:</div>
                            <div className="text-2xl font-light uppercase">{order.product.title}</div>
                        </div>
                        <div className="">
                            <div className="font-semibold">Created: {create.toLocaleString()}</div>
                            <div className="font-semibold">Price:</div>
                            <div className="text-2xl font-light">₹{order.paid}</div>
                        </div>
                    </div>)
            }): <div className="text-center"></div>}
        </div>
    </>)
}