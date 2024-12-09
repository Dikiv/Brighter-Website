import { oswald } from '@/app/ui/fonts';
import Reviewcard from './reviewCard';

export default async function Page() {
    

    return (
        
    <div className="flex grow p-8 items-center justify-center flex-col">
        <h1 className={`${oswald.className} text-center text-yellow-300 text-6xl leading-tight mb-4`}>
            My Reviews
        </h1>
        <hr className="w-1/2 border-yellow-300 mb-4" />

        {/* Toolbar */}
        <div className="border-x-2 border-yellow-300 w-1/3 bg-gray-900 shadow-md mt-4">
            <div className="flex border-b-2 border-yellow-300 justify-around items-center py-1">
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    a
                </button>
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    b
                </button>
                <button className="bg-yellow-300 text-gray-800 px-4 py-2 hover:bg-yellow-400">
                    c
                </button>
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
        
        
        <div className="columns-sm space-y-3 gap-4 mx-auto mt-8 w-3/4 ">
        <Reviewcard/>
        </div>
    </div>

    
    

        
    );
}