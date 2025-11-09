import { oswald } from '@/app/ui/fonts';
    

export default function Positions() {
  const chad = '/img/me4.png'; 
  return (
            
         <div className='border-2 border-solid'>
            <h1 className={`${oswald.className} text-yellow-300 text-5xl ms-2 leading-tight mt-6`}>
                                             SAP VIM Developer 
            </h1>
            <hr className="border-yellow-300 " />
            <h2 className={`${oswald.className} text-yellow-300 text-3xl mt-2 ms-4 leading-tight`}>
                Turnpikes
            </h2>
            <h3 className={`${oswald.className} text-yellow-300 text-xl mt-2 ms-4 leading-tight`}>
                [AUG 2025 - Current]
            </h3>
            <div className='w-3/5 mt-2 ms-4'>
                Here I worked on stuff and did things that contributed something
            </div>
            </div>
              
  );
}