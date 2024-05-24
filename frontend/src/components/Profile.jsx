export default function Profile({ profile }) {
    if (profile.first == undefined || profile.last == undefined || profile.email == undefined || profile.verified == undefined) {
        return (<>
            <div className="flex flex-col gap-2 animate-pulse">
                <div className="font-semibold">Full Name: </div>
                <div className="mb-[18px] w-60 h-5 mt-0.5 bg-gray-200 rounded-3xl"></div>
                <div className="font-semibold">Email:</div>
                <div className="h-5 my-0.5 w-60 bg-gray-200 rounded-3xl"></div>
            </div>
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