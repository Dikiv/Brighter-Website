'use client'
import { oswald } from '@/app/ui/fonts';
import { useState } from 'react';
import { Button} from '@/app/ui/button'
import { LoadingText } from '@/app/ui/dashboard/loadingText'

export function Interaction() {
    const [replyS, setreplyS] = useState(0);
    const [Loaded, setLoaded] = useState(false);
    
    function buttonPress() {
      if(Loaded){
        
        setLoaded(false)
      }else{
        setLoaded(true)
        setreplyS(prev => (prev % 3) + 1);
      }
      
    }

    return (
        <div>         
            <LoadingText
            replyS={replyS}/>

            <hr className="border-yellow-300 mb-8 " />
                        
            <Button
              text="huh?"
              loaded={Loaded}
              replyS={replyS}
              onClick={buttonPress}
            />
        </div>
    );
    
}



