import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashNav from "../components/DashNav";
import { useNavigate } from "react-router-dom";

export default function Dashboard({login , setLogin}){
    const navigate = useNavigate()
    const [active, setActive] = useState("profile")
    const [profile , setProfile] = useState({})
    useEffect(() =>{
        fetch(import.meta.env.VITE_BACKEND + "/auth/profile" , {
            method: 'get',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then((res) => res.json())
        .then((res) => setProfile(res))
    } , [])
    if(login == true){
    return(<>
    <NavBar login={login} setLogin={setLogin}/>
    <div className="bg-white h-screen py-10">
        <div className="flex bg-white gap-4">
            <DashNav active={active} setActive={setActive} />
            <DashCard profile={profile} active={active}/>
        </div>
    </div>
    <Footer/>
    </>)
    }
else{
    navigate('/login')
}
}