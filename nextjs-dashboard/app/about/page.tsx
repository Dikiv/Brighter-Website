import { oswald } from '@/app/ui/fonts';

export default function Page() {
    return (
        <div className="flex grow p-8 items-center justify-center flex-col">
            {/* Title Section */}
            <h1 className={`${oswald.className} text-center text-yellow-300 text-6xl leading-tight mb-4`}>
                About Me
            </h1>
            <hr className="w-1/2 border-yellow-300 mb-12" />

            {/* Cards Section */}
            <div className="flex flex-col items-center w-full">
                {/* Card 1 */}
            <div
            className={`${oswald.className} flex flex-col md:flex-row w-4/5 bg-gray-900 shadow-lg border border-yellow-300 overflow-hidden`}
            >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
                <img
                src="/img/americano.jpg"
                alt="About me illustration"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-center space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 text-center">
                    Who Am I?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-center">
                    I’m Chris, and I might be a software engineer, but maybe I'm not? I’ve
                    written some code, but it could be anything, really—probably just
                    numbers, or words, or maybe neither. I sometimes open Visual Studio or
                    whatever, and things happen. I sometimes think about programming while
                    playing video games, so maybe that counts? Sometimes I write code, but it
                    might not actually work, and I’m okay with that... usually.
                </p>
                </div>
            </div>
            </div>


                {/* Card 2 */}
                <div className={`${oswald.className} flex flex-col md:flex-row w-4/5 bg-gray-800 shadow-lg border border-yellow-300 overflow-hidden`}
                >
                    {/* Text Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 text-center">
                        What can I do?</h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-center">
                        I can code, I think? Well, I’ve done stuff with Python, but sometimes I forget what it's for,
                        and it just looks like fancy text on the screen. I know C#, or at least I’ve heard of it,
                        but I mainly type it out and hope the computer does the rest. 
                        I’m really good at debugging... at least I think I am, 
                        but im sure the several editors i have used will disagree. Oh, and I’ve built some websites, 
                        but I’m not sure if they exist anymore
                        </p>
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

                {/* Card 3 */}
                <div className={`${oswald.className} flex flex-col md:flex-row w-4/5 bg-gray-900 shadow-lg border border-yellow-300 overflow-hidden`}
                >
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                <img
                    src="/img/americano.jpg"
                    alt="About me illustration"
                    className="w-full h-full object-cover"
                />
                </div>
                    {/* Text Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 text-center">
                        What is this website?</h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 text-center">

                        This website is my portfolio, I think? It’s mostly a lot of text and broken links, 
                        which is kind of like an interactive README file.
                           Oh, and the images? They’re probably served via SQL, so they should load instantly,
                            I think. The main thing is that it’s definitely mobile-first,
                             even though I forgot to test it on mobile. 
                        But, you know, it works on my laptop, so it must be good enough.
                        </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className={`${oswald.className} flex w-1/2 h-14 bg-gray-800 shadow-lg border border-yellow-300 overflow-hidden flex-col justify-center p-4`}>
                {/* URL Section */}
                <div className="flex items-center justify-between h-full">
                    <a href="#" className="text-yellow-300 hover:underline">CV</a>
                    <a href="#" className="text-yellow-300 hover:underline">CV</a>
                    <a href="#" className="text-yellow-300 hover:underline">CV</a>
                    <a href="#" className="text-yellow-300 hover:underline">CV</a>
                </div>
            </div>
        </div>
    );
}
