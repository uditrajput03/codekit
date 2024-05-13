import ServiceCard from "./ServiceCard"
export default function ServiceBoard(){
    return(<>
    <div className="flex justify-center ">
    <div className="flex flex-col m-auto items-center sm:min-h-screen -mb-12 text-center gap-7">
    <h2 className=" text-2xl tracking-tight font-bold text-gray-900 sm:text-4xl">Our Services</h2>
    <p className="px-2 text-center text-lg leading-6 text-gray-600 mb-7 ">Give unique and custom touch to you web app by out services and solutions.</p>
        <ServiceCard></ServiceCard>
    </div>
    </div>
    </>)
}