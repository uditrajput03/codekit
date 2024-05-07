import { useEffect, useState } from "react"

export default function Profile({profile}){
    return(<>
    <div className="flex flex-col gap-2">
        <div>Full Name: </div>
        <div className="pb-4">{profile.first + " " + profile.last}</div>
        <div>Email:</div>
        <div>{profile.email + "      "+ (profile.verified == true ? "(Verified)" : "(Not Verified)")}</div>
    </div>
    </>)
}