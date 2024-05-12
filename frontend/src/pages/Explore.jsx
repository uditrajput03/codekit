import DetailCard from "../components/DetailCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Explore({ login }) {
    const details = {
        frontend: {
            title: "Frontend",
            description: "This is description",
            content: [{
                heading: "React", specs: ["React", "Specs"]
            },
            {
                heading: "React", specs: ["React", "Specs"]
            }]
        },
        backend: {},
        fullstack: {}
    }
    return (<>
        <NavBar login={login} />
        <div className="flex flex-col gap-5 m-auto w-2/3">
            <h1 className="text-3xl font-bold my-2 mx-10">Explore all of our templates in detail.</h1>
            <DetailCard card={details.frontend} />

        </div>
        <Footer />

    </>)
}