import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRef, useState } from 'react';
export default function Signup({ login, setLogin }) {
    const [loading, setLoading] = useState(false)

    const firstNameRef = useRef(null);
    const formRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [alert, setAlert] = useState()

    const formHandler = (e) => {
        setLoading(true)
        e.preventDefault();
        // const formData = {
        //     first: firstNameRef.current.value,
        //     last: lastNameRef.current.value,
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value
        // }
        fetch(import.meta.env.VITE_BACKEND + "/signup", {
            method: "post",
            body: new FormData(formRef.current)
        })
            .then(res => {
                return res.json()
            })
            .then((res) => {
                if (res.token != null) {
                    localStorage.setItem("token", res.token)
                    setLogin(true)
                    setAlert(
                        <div className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-100 " role="alert">
                            <span className="font-medium">Success: </span> {res.status} , An activation link has been sent to your email click it to verify your account or <a className="font-medium text-zinc-600 hover:underline " href="#">Resend Activation</a>
                        </div>
                    )
                }
                else {
                    setAlert(
                        <div className="p-4 my-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                            <span className="font-medium">Warning: </span> {res.status}
                        </div>
                    )
                }
            }).catch((e) => {
                setAlert(<div className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50  " role="alert">
                    <span className="font-medium">Error: </span>Something went wrong. Please try again later
                </div>)
            })
        setLoading(false)
    }
    return (<>
        <NavBar login={login} setLogin={setLogin}></NavBar>
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 sm:py-8 py-20 my-24 sm:my-0 mx-auto md:h-screen lg:py-0">
                    <div className='flex justify-center max-w-xl'>
                        {alert}
                    </div>
                    <div className=" bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create and account
                            </h1>
                            <form ref={formRef} onSubmit={formHandler} className="space-y-4 md:space-y-6" action={`${import.meta.env.VITE_BACKEND}/signup`} method='post'>
                                <div className='flex justify-around gap-2 '>
                                    <div>
                                        <label for="first" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                        <input ref={firstNameRef} type="text" name="first" id="first" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5      " placeholder="John" required={true} />
                                    </div>
                                    <div>
                                        <label for="last" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                        <input ref={lastNameRef} type="text" name="last" id="last" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5      " placeholder="Doe" required="true" />
                                    </div>
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5      " placeholder="name@company.com" required="true" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5      " minlength="8" maxlength="20" required="true" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-zinc-300    " required="true" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-zinc-600 hover:underline " href="/terms">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                {/* <button type="submit" className="w-full text-white bg-zinc-600 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Create an account</button> */}
                                <button type="submit" class={`justify-center items-center flex w-full text-white ${loading ? "bg-zinc-300 hover:bg-zinc-400" : "bg-zinc-600 hover:bg-zinc-700"} focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                                    <button type="submit" className="">Create an account</button>
                                    <div class={`border-gray-300 ${loading ? "" : "hidden"} ml-2  animate-spin rounded-full border-2 w-4 h-4 border-r-zinc-400`} />
                                </button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Already have an account? <a href="/login" className="font-medium text-zinc-600 hover:underline ">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </>)
}