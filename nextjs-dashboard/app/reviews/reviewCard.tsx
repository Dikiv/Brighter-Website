import supabase from '../lib/utils'
  
export default async function Reviewcard() {
    
    const { data: Reviews, error } = await supabase.from("Reviews").select("Title, Score, ReleaseYear, Genre");

    if (error) {
        console.error("Error fetching reviews:", error.message);
        return <p>Error loading reviews.</p>;
    }
    
    if (!Reviews || Reviews.length === 0) {
        return <p>No reviews available.</p>;
    }

    return Reviews?.map((review) => (

            <div className=" flex flex-col sm:flex-row bg-gradient-to-b from-gray-800 to-black text-yellow-300 shadow-md">
            {/* Text Content */}

            <div className="flex flex-col justify-between sm:w-2/3 w-full p-4">
                <h2 className="text-xl font-semibold mb-2">{review.Genre}</h2>
                <h1 className="text-5xl font-bold mb-4">{review.Title}</h1>     
                <h3 className="text-lg mb-2">{review.ReleaseYear}</h3>                   
                <p className="text-4xl mb-2">{review.Score}/10</p>                    
            </div>

            {/* Image */}
            <div className="sm:w-1/3 w-full h-64 sm:h-full">
                <img
                    src="img/americano.jpg"
                    alt="Game Image"
                    className="object-cover h-full w-full"
                />
            </div>
            </div>

      ))

}