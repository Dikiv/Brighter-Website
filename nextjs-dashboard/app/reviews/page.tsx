import { oswald } from '@/app/ui/fonts';

export default function Page() {
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-3/4">
        <div className="flex flex-col sm:flex-row bg-gradient-to-b from-gray-800 to-black text-yellow-300 shadow-md">
            {/* Text Content */}
            

            <div className="flex flex-col justify-between sm:w-2/3 w-full p-4">
                <h2 className="text-xl font-semibold mb-2">Genre</h2>
                <h1 className="text-5xl font-bold mb-4">Game Title</h1>     
                <h3 className="text-lg mb-2">Year</h3>                   
                <p className="text-4xl mb-2">x/10</p>                    
            </div>


            {/* Image */}
            <div className="sm:w-1/3 w-full h-64 sm:h-full">
                <img
                    src="img/americano.jpg"
                    alt="Game Image"
                    className="object-cover h-full w-full"
                />
            </div>
        </div>
    </div>


  
        </div>

    
    

        
    );
}