'use client'
import { useState } from "react"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}


export function Button({ replyS, onClick, text, loaded  }: ButtonProps) {
    //const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onClick} 
      className={`
        ${ loaded ? "opacity-0" : "opacity-100"} 
        flex h-10 items-center animate-bounce bg-yellow-300 px-8 
        font-medium text-black transition-colors hover:bg-yellow-600
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-blue-500 active:bg-yellow-900 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`
       }
    >
      {text}
      
    </button>
  );
}
