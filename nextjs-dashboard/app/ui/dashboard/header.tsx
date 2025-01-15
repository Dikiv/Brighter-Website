import { oswald } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/dashboard/nav-links';

export function Header() {
    return (
        <div className="flex justify-center"> 
        <div className="flex items-center p-4 space-x-4">
        
      
        {/* Header Links Box */}
        <div className={`${oswald.className} bg-gray-900  border-2 border-yellow-300 p-4 shadow-md"`}>
          <div className=" flex justify-center">
          <NavLinks/>
        </div>
        </div>
      
        
      </div>
      </div>
    );
  }
  