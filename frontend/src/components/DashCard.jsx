import Orders from "./Orders";
import Profile from "./Profile";

export default function DashCard({active , profile}) {
    if (active == 'profile') {
    return (<>
        <div className="flex justify-center flex-grow flex-col px-10">
        <Profile profile={profile}/>
        </div>
    </>)        
    }
    if(active == 'orders'){
    return (<>
        <div className="flex">
        <Orders/>
        </div>
    </>)        
    }
}