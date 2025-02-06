'use client'
import React, { useState } from 'react'

const FilterTools = ({genres}:{genres:any[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    console.log(genres.map(x=>x.genre))
    console.log(genres.length)
    const i = 'xidx'
    
    return(
    <div>
      <button
        type="button"
        className="relative  w-24 bg-gray-50 mt-1.5 border border-gray-300 text-gray-900 text-sm focus:ring-gray-500 
        focus:border-yellow-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-gray-500 dark:focus:border-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
        <svg className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <div className="grid absolute z-10 bg-white divide-y divide-gray-100 
         shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2">
            <ul className="grid grid-cols-3 text-sm text-gray-700 dark:text-gray-200 ">

            {genres.map( genre => ( 
                <li>
                
                <div className="items-center hover:bg-gray-400" onClick={_=>document.getElementById(i.concat(String(genre)))}>
                  <input
                    id={i.concat(String(genre))}
                    type="checkbox"
                    defaultChecked
                    className=" w-4 h-4 mb-4 ms-2 mt-4 text-blue-600 bg-gray-100 border-gray-300
                     rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 
                     dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500
                     "
                  />
                  <label htmlFor={i.concat(String(genre))} className="ms-2 text-sm font-medium 
                  text-gray-900 dark:text-gray-300">
                    {genre.genre}
                  </label>
                </div>
              </li>
              
            ))}
            
            </ul>
       
        </div>
      )}

        </div>
    )
}

export default FilterTools