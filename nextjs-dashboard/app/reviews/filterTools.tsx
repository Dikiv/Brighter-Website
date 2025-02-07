'use client'
import React, { useState,useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const FilterTools = ({genres}:{genres:any[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const {replace} = useRouter()
    const searchParams = useSearchParams()
    const excludedGenres : String[] = [] 


    const i = 'xidx'
    
    function checking(id:string,genre:any){
      const params = new URLSearchParams(searchParams);
      const genreId = genre.id
      const ele = document.getElementById(id) as HTMLInputElement
    
      if(ele && ele.checked){
        ele.checked = false
        excludedGenres.push(genreId)
        params.append("exclude",genreId)

      }else if (!ele.checked){
        ele.checked = true
        params.delete("exclude",genreId)
      }
      replace(`${pathname}?${params.toString()}`)
    }

    function controlCheck(id:string){
      const params = new URLSearchParams(searchParams);      
      if(params.getAll("exclude").includes(id)){
        console.log("excluded" + id)
        return false
      }
      return true
    }

    

    return(
    <div>
      <button
        type="button"
        className=" w-24 bg-gray-50 mt-1.5 border border-gray-300 text-gray-900 text-sm focus:ring-gray-500 
        focus:border-yellow-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-gray-500 dark:focus:border-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Genres
        <svg className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <div className="grid absolute z-10 bg-white divide-y divide-gray-100 
         shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2">
            <ul className="grid grid-cols-3 text-sm text-gray-700 dark:text-gray-200 ">

            {genres.map( genre => controlCheck(genre.id) ? (
                
                <li key={genre.id}>
                <div className="items-center hover:bg-gray-400" >
                  <input
                    id={i.concat(String(genre.id))}
                    type="checkbox"
                    checked={controlCheck(i.concat(String(genre.id)))}
                    onChange={(e) => (e.target.checked)}
                    className=" w-4 h-4 mb-4 ms-2 mt-4 text-blue-600 bg-gray-100 border-gray-300
                     rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 
                     dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500
                     "
                  />
                  <label className="ms-2 text-sm font-medium 
                  text-gray-900 dark:text-gray-300 hover:underline">
                    {genre.genre}
                  </label>
                  
                  </div>
                
                
                
              </li>
              
            ):'' )}
            
            </ul>
       
        </div>
      )}

        </div>
    )
}
//onClick={_=>checking(i.concat(String(genre.id)),genre)}
          //onChange={_=>checking(i.concat(String(genre.id)),genre)}           
export default FilterTools