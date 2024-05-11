export default function NewsLetter() {
    return (<>
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 max-w-xl justify-center items-center text-sm text-gray-600 sm:p-8">
                <p className="px-2 paragraph mb-2">Join our newsletter to stay updated about the latest product We've created and discover the great finds We've come across on the internet.</p>
                <div className="flex justify-center items-center max-w-xl sm:px-20">
                    <input type="text" name="email" placeholder="you@example.com" required="" className=" p-2 mx-1 sm:min-w-full bg-mauve-light-3 text-mauve-light-12 placeholder:text-mauve-light-11 "/>
                    <button type="button" className="mx-1 my-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Subscribe</button>

                </div>
                <div class="text-sm paragraph p-2">By using our any services and products, you agree with our <a rel="nofollow" href="/terms" class="text-blue-600 hover:underline ">Terms of Service</a> and <a rel="nofollow" class="text-blue-600 hover:underline" href="/privacy">Privacy Policy</a>.</div>
            </div>
        </div>
    </>)
}