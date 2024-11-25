import { oswald } from '@/app/ui/fonts';

export function Header() {
    return (
        <div className="flex justify-center"> 
        <div className="flex items-center p-4 space-x-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
        </div>
      
        {/* Header Links Box */}
        <div className="w-[400px] bg-gray-900  border-2 border-yellow-500 p-4 shadow-md">
          <div className=" flex justify-center">
            <a href="#section1" className="px-4 py-2 text-yellow-500 hover:text-yellow-300 custom-text-size">
            Home
            </a>
            <a href="#section2" className="px-4 py-2 text-yellow-500 hover:text-yellow-300 custom-text-size">
            Works
            </a>
            <a href="#section3" className="px-4 py-2 text-yellow-500 hover:text-yellow-300 custom-text-size">
            Reviews
            </a>
            <a href="#section4" className="px-4 py-2 text-yellow-500 hover:text-yellow-300 custom-text-size">
            About
            </a>
        </div>
        </div>
      
        {/* Right-Aligned Section */}
        <div className="flex items-center">
          <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400">
            tmp
          </button>
        </div>
      </div>
      </div>
    );
  }
  