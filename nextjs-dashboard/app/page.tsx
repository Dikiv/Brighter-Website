
import { oswald } from '@/app/ui/fonts';
import Workexp from './frontpage/workexp';
  
export default function Page() {
  
  return (
    
   
      <div className="z-0">
        <div className="top-0 h-screen flex flex-col items-center z-10 justify-center bg-gradient-to-b from-zinc-900 to-gray-900">
          <h2 className="text-4xl font-bold">The First slide</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
          <div className="top-0 border-t-2 border-yellow-500 h-flex flex flex-col items-center 
                          justify-center bg-gradient-to-b from-gray-900 to-zinc-800 text-white">
            <h1 className={`${oswald.className} text-yellow-300 text-5xl leading-tight mt-6`}>
                Work Experience ------ Education 
            </h1> 
            <hr className="w-3/4 border-yellow-300 mt-6" />
            <Workexp/>
          </div>
          <div className="top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-gray-800">
          <h2 className="text-4xl font-bold">Hello</h2>
            
          </div>
        </div>
               
      
  );
}
