export default function Footer(){
    return(<>
<footer className=" rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-black sm:text-center">© 2024 <a href="/" className="hover:underline">CodeKit.me</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
        <li>
            <a href="/explore" className="hover:underline me-4 md:me-6">Explore</a>
        </li>
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/terms" className="hover:underline me-4 md:me-6">Terms of Service</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </>)
}