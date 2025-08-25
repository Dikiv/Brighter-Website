import { oswald } from '@/app/ui/fonts';
import { Interaction } from '@/app/ui/dashboard/interaction'

export function Greeter() {
    const chad = '/img/me4.png'; 
    
        
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
                    <div className="flex-1 p-2 flex flex-col justify-between">
                        
                        <div className="flex-1 flex flex-col justify-center space-y-4">

                        <hr className=" border-yellow-300 " />
                        
                        <Interaction/>
                        
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/4">
                        <img
                        src={chad}
                        alt="About me illustration"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
