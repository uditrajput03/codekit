export default function DetailCard({card}){
    if(card != null){
       const {title, description, content} = card;
    return (<>
    <div className="flex flex-col gap-2 my-5 sm:mx-10">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <h1 className="text-base font-light text-gray-700">{description}</h1>
        {content.map((e) => {
            return (<div>
                <h2 className="font-semibold text-lg">{e.heading}</h2>
                <div className="grid sm:grid-cols-2 shadow-md sm:mx-10">
                {e.specs.map((inner) => (<h3 className="mx-5"> - {inner}</h3>))}
                </div>
            </div>)
        })}
    </div>
        <div className="border-[1px] border-gray-400 "></div>
    </>)
    }
    else{
        return <></>
    }
}