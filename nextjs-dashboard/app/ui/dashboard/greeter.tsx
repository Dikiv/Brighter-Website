export function Greeter() {
    const chad = '/img/americano.jpg'; // Correct path for Next.js public folder
    return (
        <div
            className="relative flex w-full flex-col justify-end rounded bg-cover bg-center px-6 py-10 md:px-20"
            style={{ backgroundImage: `url(${chad})` }}
        >
            {/* Shading */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
            {/* Text */}
            <p className="relative z-30 text-white text-large font-bold">Bottom text</p>
        </div>
    );
}
