'use client'
import React, { useState } from 'react'
import reviews from './reviews'

const FilterTools = (reviews:{reviews:reviews}) => {
    const [isOpen, setIsOpen] = useState(false);
    const genreCategories = Array.from(new Set(reviews.reviews.map(r=> r.Genre))) 
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
        <div className="absolute z-10 w-48 bg-white divide-y divide-gray-100 
         shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2">
          
            {genreCategories.map( genre => ( 
                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                <li>
                <div className="flex items-center">
                  <input
                    id={i.concat(genre)}
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                     rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 
                     dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500
                     "
                  />
                  
                  <label htmlFor={i.concat(String(genre))} className="ms-2 text-sm font-medium 
                  text-gray-900 dark:text-gray-300">
                    {genre}
                  </label>
                </div>
              </li>
              </ul>
            ))}
            

       
        </div>
      )}

        </div>
    )
}

export default FilterTools