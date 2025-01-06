export function Greeter() {
    const chad = '/img/americano.jpg'; // Correct path for Next.js public folder
    return (
        <div
            className="relative flex w-5/6 flex-col justify-start bg-cover bg-center px-6 py-10 md:px-20"
            style={{ backgroundImage: `url(${chad})` }}
        >
            {/* Text */}
            <p className="relative bg-black bg-opacity-20 text-center w-1/4 z-30 text-6xl font-bold">TOP TEXT</p>
        
            </div>
    );
}