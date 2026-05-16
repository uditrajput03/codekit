import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashNav from "../components/DashNav";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ login, setLogin }) {
    const navigate = useNavigate()
    const [active, setActive] = useState("profile")
    const [profile, setProfile] = useState({})
    
    useEffect(() => {
        if (!login) {
            navigate('/login')
            return
        }
        
        fetch(import.meta.env.VITE_BACKEND + "/auth/profile", {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then((res) => res.json())
        .then((res) => setProfile(res))
        .catch(err => console.error("Error fetching profile:", err))
    }, [login, navigate])

    if (!login) {
        return null // This will be handled by useEffect
    }

    return (
        <>
            <NavBar login={login} setLogin={setLogin} />
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="sm:w-48 flex-shrink-0">
                            <DashNav active={active} setActive={setActive} />
                        </div>
                        <div className="flex-auto">
                            <DashCard profile={profile} active={active} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
