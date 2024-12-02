import { oswald } from '@/app/ui/fonts';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function Footer() {
    return (
        <div className={`${oswald.className} h-30 bg-gray-900 border-t-2 border-yellow-300 p-4 shadow-md`}>
    <div className="flex justify-between items-center h-full">
        {/* Left side content (About Us) */}
        <div className="text-white">
            <h3 className="font-semibold text-lg">About Us</h3>
            <p>Learn more</p>
        </div>

        {/* Right side content (Icons) */}
        <div className="flex items-center space-x-4">
            {/* Gmail Icon */}
            <a href="mailto:christopher.cortsen@gmail.com" className="flex items-center">
                <img src="svgIcons/gmail-color.svg" alt="Gmail" className="h-6 w-6" />
            </a>
            
            {/* GitHub Icon */}
            <a href="https://github.com/Dikiv" className="flex items-center">
                <img src="svgIcons/github-color.svg" alt="GitHub" className="h-6 w-6" />
            </a>

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/christopher-ryder-cortsen-267374222/" className="flex items-center">
                <img src="svgIcons/linkedin-color.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
        </div>
    </div>
</div>

    );
}
