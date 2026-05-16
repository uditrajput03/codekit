import { load } from '@cashfreepayments/cashfree-js';

export default async function CashFree(setLoading, setAlert, productId = 1) {
    setLoading(true)
    
    try {
        const sessionResponse = await fetch(import.meta.env.VITE_BACKEND + "/auth/pay/order", {
            method: 'post',
            body: JSON.stringify({ productId: productId }),
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
        
        if (!sessionResponse.ok) {
            throw new Error('Failed to create payment session')
        }
        
        const sessionData = await sessionResponse.json()
        const sessionId = sessionData.res?.payment_session_id
        
        if (!sessionId) {
            throw new Error('Invalid payment session')
        }

        const cashfree = await load({
            mode: import.meta.env.VITE_CASHFREE_MODE || "production" // Use environment variable
        });

        let checkoutOptions = {
            paymentSessionId: sessionId,
            redirectTarget: "_modal"
        };

        cashfree.checkout(checkoutOptions).then((result) => {
            if (result.error) {
                setAlert({
                    type: "error",
                    message: "Something went wrong. Please try again later"
                })
                console.log("Payment error:", result.error);
            }
            if (result.redirect) {
                setAlert({
                    type: "warning",
                    message: "Payment will be redirected"
                })
                console.log("Payment will be redirected");
            }
            if (result.paymentDetails) {
                setAlert({
                    type: "success",
                    message: "Payment successful! Your order will be available in your dashboard or will be processed within 24 hours."
                })
                console.log("Payment completed:", result.paymentDetails.paymentMessage);
            }
        }).catch(error => {
            setAlert({
                type: "error",
                message: "Payment processing error. Please try again."
            })
            console.error("Checkout error:", error);
        });
    } catch (error) {
        console.error("CashFree error:", error)
        setAlert({
            type: "error",
            message: "Something went wrong. Please try again later"
        })
    } finally {
        setLoading(false)
    }
}
