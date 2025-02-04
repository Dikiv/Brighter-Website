import supabase from '../lib/utils'
import ReviewImage from '../reviews/reviewImage'
import { sortBy } from 'sort-by-typescript';


const Reviewcard = async ({query,sort,order}:{query:string,sort:string,order:string}) => {
    
    const { data: Reviews, error } = await supabase.from("Reviews").select("id, Title, Score, ReleaseYear, Genre");
    

    if (error) {
        console.error("Error fetching reviews:", error.message);
        return <p>Error loading reviews.</p>;
    }
    
    if (!Reviews || Reviews.length === 0) {
        return <p>No reviews available.</p>;
    }
    
    const filtered = Array.isArray(Reviews) ? Reviews.filter((r) => { 
      return typeof r?.Title === "string" &&
      typeof query === "string" &&
      (r.Title.toLowerCase().includes(query.toLowerCase()));
    }).sort(sortBy(sort)) : []

    if(order=='d'){
      filtered.reverse()
    }

    return( 
      <div className="grid grid-cols-8 gap-4">
      {Array.isArray(filtered) && filtered?.length === 0 && (
      <h2 className='text-center text-4xl'>no reviews for '{query?.toLowerCase()}' was found</h2>
      )}

      {Array.isArray(Reviews) && filtered?.map((review) => (
  
      <div
      className={`flex flex-col bg-gradient-to-b from-gray-800 to-black shadow-md 
        w-3/7 border-yellow-600 border mb-2  
        break-inside-avoid-column group`}
       key={review.id + review.Title} 
      >
        
        <div className="relative">
        <ReviewImage
            id={review.id + '.png'}
        />

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/50 to-black/80 
        transition-opacity duration-700 group-hover:opacity-0"/>
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 
        transition-opacity duration-700 group-hover:opacity-0">
        <h2 className="text-sm mb-2">{review.Genre}</h2>
          <h1 className="text-2xl font-bold mb-4 break-words">{review.Title}</h1>
          <h3 className="text-lg mb-2">{review.ReleaseYear}</h3>
          <p className="text-4xl mb-2">{review.Score}/10</p>
        </div>
      </div>

        </div>
        

      ))} 
    </div>
      

)}

export default Reviewcard