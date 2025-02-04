import { oswald } from '@/app/ui/fonts';
import Reviewcard from './reviewCard';
import SearchReview from './searchReview'
import SortingTools from './sortingTools'

const Page = async({
        searchParams,
    }: {
        searchParams?: Promise<{ query?: string, sort?:string, order?:string }>

    })=>{    

    const resolved = await searchParams
    const query = await resolved?.query ?? ''
    const sort = await resolved?.sort ?? 'ReleaseYear'
    const order = await resolved?.order ?? 'a'
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
        <div className="border-x-2 border-yellow-300 w-2/3 bg-gray-900 shadow-md mt-4 mb-8">
            <div className="flex border-b-2 border-yellow-300 justify-around items-center py-1">
                <SearchReview/>
            </div>
            <div className="flex justify-around items-center py-1">
                <SortingTools/>
            </div>
        </div>
        
        
        
        <Reviewcard
        query = {query}
        sort = {sort}
        order = {order}
        />
        
    </div> 
    );
}

export default Page