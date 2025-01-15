import { oswald } from '@/app/ui/fonts';
import Reviewcard from './reviewCard';
import SearchReview from './searchReview'

const Page = async({
        searchParams,
    }: {
        searchParams?: Promise<{ query?: string }>

    })=>{    

    const resolved = await searchParams
    const query = await resolved?.query ?? ''

    return (
        
    <div className="flex grow p-8 items-center justify-center flex-col">
        <h1 className={`text-center text-yellow-300 text-6xl leading-tight mb-4`}>
            My Reviews
        </h1>
        <hr className="w-1/2 border-yellow-300 mb-4" />
        
        <h1 className={`text-center text-yellow-300 text-2xl leading-tight mb-4`}>
            Here's some games I've played and some I've enjoyed
        </h1>
        <hr className="w-1/2 border-yellow-300 mb-4" />

        {/* Toolbar */}
        <div className="border-x-2 border-yellow-300 w-2/3 bg-gray-900 shadow-md mt-4">
            <div className="flex border-b-2 border-yellow-300 justify-around items-center py-1">
                <SearchReview/>
            </div>
            <div className="flex justify-around items-center py-1">
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    X
                </button>
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    Y
                </button>
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    Z
                </button>
            </div>
        </div>
        
        
        <div className="columns-1 sm:columns-2 md:columns-3 
        lg:columns-4 xl:columns-6 mx-auto 
        gap-2 mt-8 w-3/4 break-before-column">
        <Reviewcard
        query = {query}
        />
        </div>
    </div> 
    );
}

export default Page