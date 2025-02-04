'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

const sortingTools = () => {

    const pathname = usePathname()
    const {replace} = useRouter()
    const searchParams = useSearchParams()


    function handleSelectCategory(category : React.ChangeEvent<HTMLSelectElement>){
        const params = new URLSearchParams(searchParams);
        const categorySelected = category.target.value

        if(categorySelected){
            params.set("sort",categorySelected)
        }else{
            params.delete("sort")
        }
        
        replace(`${pathname}?${params.toString()}`)
    }

    function ToggleOrder(order:React.ChangeEvent<HTMLInputElement>){
        const params = new URLSearchParams(searchParams);
        const categorySelected = order.target.value

        if(categorySelected){
            params.set("order",categorySelected)
        }else{
            params.delete("order")
        }
        
        replace(`${pathname}?${params.toString()}`)

    }
      
      return (
        <div className="flex">
        <form className="max-w ">
            <label htmlFor="cat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Sort by Category
            </label>
            <select
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-yellow-500 
                focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                onChange={category => handleSelectCategory(category)}
            >
                <option defaultValue='ReleaseYear' value='ReleaseYear'>Release Year</option>
                <option value="Title">Title</option>
                <option value="Genre">Genre</option>
                <option value="Score">Score</option>
            </select>
        </form >

            <div className="max-w-sm mx-auto mt-4 ms-6">
            <div className="flex items-center mb-4">
                    <input
                    defaultChecked
                    id="default-radio-1"
                    type="radio"
                    name="default-radio"
                    onChange={d => ToggleOrder(d)}
                    value='a'
                    className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300
                     dark:focus:ring-yellow-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium dark:text-gray-300">
                    Ascending
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                    id="default-radio-2"
                    type="radio"
                    value='d'
                    name="default-radio"
                    onChange={d => ToggleOrder(d)}
                    className="w-4 h-4 text-yellow-300 bg-gray-100 border-gray-300 focus:ring-yellow-300
                     dark:focus:ring-yellow-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium dark:text-gray-300">
                    Descending
                    </label>
                </div>   
            </div>
        </div>
      )
    
}
export default sortingTools