export default function DetailCard({card}){
    if(card != null){
       const {title, description, content} = card;
    return (<>
    <div className="flex flex-col gap-2 my-5 mx-10">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <h1 className="text-base font-light text-gray-700">{description}</h1>
        {content.map((e) => {
            return (<div>
                <h2 className="font-semibold text-lg">{e.heading}</h2>
                {e.specs.map((inner) => (<h3 className="ml-10"> - {inner}</h3>))}
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