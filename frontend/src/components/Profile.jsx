import { useEffect, useState } from "react"

export default function Profile({ profile }) {
    console.log(profile == undefined);
    if (profile.first == undefined || profile.last == undefined || profile.email == undefined || profile.verified == undefined) {
        return (<>
            <div className="flex flex-col gap-2 animate-pulse">
                <div className="font-semibold">Full Name: </div>
                {/* <div className="pb-4">{profile.first + " " + profile.last}</div> */}
                <div class="mb-4 w-60 h-5 bg-gray-200 rounded-3xl"></div>
                <div className="font-semibold">Email:</div>
                <div class="h-5 w-60 bg-gray-200 rounded-3xl"></div>
                {/* <div>{profile.email + "      " + (profile.verified == true ? "(Verified)" : "(Not Verified)")}</div> */}
            </div>

            {/* <div class="p-4 bg-white rounded shadow w-[400px]">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-12 w-12"></div>
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-300 rounded"></div>
                            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>)
    }
    else
        return (<>
            <div className="flex flex-col gap-2">
                <div className="font-semibold">Full Name: </div>
                <div className="pb-4">{profile.first + " " + profile.last}</div>
                <div className="font-semibold">Email:</div>
                <div>{profile.email + "      " + (profile.verified == true ? "(Verified)" : "(Not Verified)")}</div>
            </div>
        </>)
}