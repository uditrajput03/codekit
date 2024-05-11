import { load } from '@cashfreepayments/cashfree-js';
export default async function CashFree(setLoading, setAlert, productId = 1) {
    setLoading(true)
    const session = await fetch(import.meta.env.VITE_BACKEND + "/auth/pay/order", {
        method: 'post',
        body: JSON.stringify({ productId: productId }),
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
        .then((res) => res.json())
        .then((res) => res.res.payment_session_id)
    const cashfree = await load({
        mode: "sandbox" //or production
    });
    let checkoutOptions = {
        paymentSessionId: session,
        redirectTarget: "_modal"
    };

    cashfree.checkout(checkoutOptions).then((result) => {
        if (result.error) {
            setAlert(<div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                <span class="font-medium">Error: </span>Something went wrong. Please try again later
            </div>)
            console.log("User has closed the popup or there is some payment error, Check for Payment Status");
            console.log(result.error);
        }
        if (result.redirect) {
            setAlert(
                <div class="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                    <span class="font-medium">Warning: </span> {res.status}
                </div>
            )
            // This will be true when the payment redirection page couldnt be opened in the same window
            // This is an exceptional case only when the page is opened inside an inAppBrowser
            // In this case the customer will be redirected to return url once payment is completed
            console.log("Payment will be redirected");
        }
        if (result.paymentDetails) {
            setAlert(
                <div class="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                    <span class="font-medium">Success: </span> Payment successful, You order will be available in you <a className='underline font-semibold' href="/dashboard">dashboard</a> or will be proceessed under 24 hours.
                </div>
            )
            // This will be called whenever the payment is completed irrespective of transaction status
            console.log("Payment has been completed, Check for Payment Status");
            console.log(result.paymentDetails.paymentMessage);
        }
        setLoading(false)
    });

    return
}