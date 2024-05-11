import { useEffect, useState } from "react"

export default function Profile({profile}){
    return(<>
    <div className="flex flex-col gap-2">
        <div className="font-semibold">Full Name: </div>
        <div className="pb-4">{profile.first + " " + profile.last}</div>
        <div className="font-semibold">Email:</div>
        <div>{profile.email + "      "+ (profile.verified == true ? "(Verified)" : "(Not Verified)")}</div>
    </div>
    </>)
}