import { useNavigate } from "react-router-dom"

export default function PriceCard({ card }) {
    const navigate = useNavigate()
    const { title, description, price, specs } = card
    const clickHandler = () => {
        navigate('/payment', { state: card })
    }
    const clickExplore = () => {
        navigate('/explore',  {state: {ref: card.title}})
    }
    return (<>
        <div className='relative overflow-hidden max-w-xs rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl mb-20'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='backdrop-blur-3xl'>
                <div className="flex py-4 px-7 flex-col justify-center items-center bg-white wrap text-center gap-1 border rounded-xl">
                    <h1 className="m-3 text-2xl font-semibold">{title}</h1>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                    <h1 className="m-2 text-5xl font-bold">₹{price}</h1>
                    <div className=" flex flex-col self-start gap-2">
                        {specs.map((e , index) => {
                            return <div key={index}>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span >{e}</span>
                                </li>
                            </div>
                        })}
                    </div>
                    <div className="m-5">
                        <button onClick={clickExplore} className="group my-2 sm:min-w-64 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"><span>More Details</span><div className="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></button>
                        <button onClick={clickHandler} className="group  sm:min-w-64 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"><span>Buy Now</span><div className="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}