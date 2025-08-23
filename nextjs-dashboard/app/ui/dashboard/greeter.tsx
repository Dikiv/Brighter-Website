import { oswald } from '@/app/ui/fonts';

export function Greeter() {
    const chad = '/img/americano.jpg'; // Correct path for Next.js public folder
    
    return (
      
        <div className="flex grow items-center justify-center flex-col">
                    {/* Title Section */}
                    <h1 className={`${oswald.className} text-center text-yellow-300 text-6xl leading-tight mb-4`}>
                        Christopher Ryder
                    </h1>
                    <hr className="w-1/2 border-yellow-300 mb-12" />
        
                    {/* Cards Section */}
                    <div className="flex flex-col items-center w-full">
                        {/* Card 1 */}
                    <div
                    className={`${oswald.className} flex flex-col md:flex-row w-4/5  overflow-hidden`}
                    >
                    
                    {/* Text Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        
                        <div className="flex-1 flex flex-col justify-center space-y-4">

                        <hr className=" border-yellow-300 " />


                        <h2 className="text-2xl md:text-xl lg:text-2xl text-yellow-300 text-gray-300 text-center">
                            Powered by caffeine potions, I conjure clean code from chaos and alterate configurations
    
                        </h2>
                        <hr className="border-yellow-300 mb-8 " />


                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                        src="/img/americano.jpg"
                        alt="About me illustration"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}