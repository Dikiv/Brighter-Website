'use client'
import { oswald } from '@/app/ui/fonts';
import { useScramble } from "use-scramble";
import { useState } from "react"


const reply1 = "Hi, I'm Christopher Ryder, a problemsolver and gaming enthusiast. My approach to development is much like taking on a challenge in an RPG, there are countless ways to get it done, and theres always someone who'll say you did it wrong."
const reply2 = "This website is my 'Domain' or a portfolio if you will. You can discover projects I have worked on, or other topics I'm passionate about."
const reply3 = "lol"

export const LoadingText = ({replyS = 0}) => {
    
    const { ref } = useScramble({
    text: replyS === 1 ? reply2 :
            replyS === 2 ? reply3 :
                reply1,
    playOnMount: true,
    speed:1,
    scramble:2,
    step:3
    });
    return <p ref={ref} />;
}
