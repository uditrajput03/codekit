import { useRef, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Contact({ login }) {
    const [alert, setAlert] = useState()
    const formRef = useRef(null)
    function submitHandler(e) {
        e.preventDefault();
        console.log(new FormData(formRef.current));
        fetch(import.meta.env.VITE_BACKEND + "/contact", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                if(res.id='id' || res.status == 200)
                    console.log("Inside if");
                setAlert(
                    <div class="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                        <span class="font-medium">Success: </span> Contact ticket has been created successfully, We will shortly contact you on provided Email.
                    </div>
                )
            })
            .catch((e) => {
                console.log(e);
                setAlert(<div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                    <span class="font-medium">Error: </span>Something went wrong. Please try again later
                </div>)
            })
    }
    return (<>

        <NavBar login={login} />
        <div className="flex justify-center text-center"> {alert}</div>

        <section class="bg-white ">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 ">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form onSubmit={submitHandler} ref={formRef} class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5       " placeholder="name@flowbite.com" required={true} />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                        <input type="text" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500       " placeholder="Let us know how we can help you" required={true} />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500      " placeholder="Leave a comment..." required={true}></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300   ">Send message</button>
                </form>
            </div>
        </section>
        <Footer />
    </>)
}
