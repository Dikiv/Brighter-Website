import ReviewImage from '../reviews/reviewImage'
import { sortBy } from 'sort-by-typescript';
import reviews from './reviews';


const Reviewcard = async ({query,sort,order,Reviews,exclude}:{query:string,sort:string,order:string,Reviews:reviews,exclude:string[]}) => {
    
   
    if (!Reviews || Reviews.length === 0) {
        return <p>No reviews available.</p>;
    }

    const filtered = Array.isArray(Reviews) ? Reviews.filter((r) => { 
      return typeof r?.title === "string" &&
      typeof query === "string" &&
      (r.title.toLowerCase().includes(query.toLowerCase())) && 
      !r.genres.some(x=>exclude.includes(String(x.id))) ;
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
       key={review.id + review.title} 
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
        <h2 className="text-sm mb-2">{review.genres.map(g => g.genre + ', ')}</h2>
          <h1 className="text-2xl font-bold mb-4 break-words">{review.title}</h1>
          <h3 className="text-lg mb-2">{review.releaseyear}</h3>
          <p className="text-4xl mb-2">{review.score}/10</p>
        </div>
      </div>

        </div>
        

      ))} 
    </div>
      

)}

export default Reviewcard