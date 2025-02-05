'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'


const searchReview = () => {
    const pathname = usePathname()
    const {replace} = useRouter()
    const searchParams = useSearchParams()


    function handleSearch(event: React.ChangeEvent<HTMLInputElement>){
        const params = new URLSearchParams(searchParams);
        const inputValue = event.target.value
        
        if(inputValue){
            params.set("query",inputValue)
        }else{
            params.delete("query")
        }
        
        replace(`${pathname}?${params.toString()}`)
    }
    
    

    return(
        <input 
        id='searchBar' 
        onChange={handleSearch}
        defaultValue={searchParams.get('query')?.toString()}  
        placeholder="Search Title"
        className='text-center text-black w-2/4'
        >
        </input>
    )
    


}

export default searchReview