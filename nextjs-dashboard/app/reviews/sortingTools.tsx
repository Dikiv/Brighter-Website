'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import React, { useState } from 'react'

const sortingTools = () => {
    const [isChecked, setIsChecked] = useState(false)
    const pathname = usePathname()
    const {replace} = useRouter()
    const searchParams = useSearchParams()


    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
      if(isChecked){
        ToggleOrder('a')
      }else{
        ToggleOrder('d')
      }
      
    }

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

    function ToggleOrder(order : string){
        const params = new URLSearchParams(searchParams);
        
        if(order){
            params.set("order",order)
        }else{
            params.delete("order")
        }
        
        replace(`${pathname}?${params.toString()}`)

    }
      
      return (
        <div className="flex">

        {/* Sort by category */}
        <form className="max-w ">
            <select
                id="categories"
                className="bg-gray-50 mt-1.5 border border-gray-300 text-gray-900 text-sm focus:ring-gray-500 
                focus:border-yellow-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-gray-500 dark:focus:border-yellow-500"
                onChange={category => handleSelectCategory(category)}
            >
                <option defaultValue='releaseyear' value='releaseyear'>Release Year</option>
                <option value="title">Title</option>
                <option value="genre">Genre</option>
                <option value="score">Score</option>
            </select>
        
        </form >

    


        {/* Ascending & Descending order */}
            <label className="ms-8 autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                <input
                    type="checkbox"
                    name="autoSaver"
                    className="sr-only border-yellow-400"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span
                    className={`slider mr-3 flex h-[50px] w-[26px] items-center p-1 duration-200  ${
                    isChecked ? "bg-gray-400" : "bg-yellow-400"
                    }`}
                >
                    <span
                    className={`dot mb-6 h-[18px] w-[18px] bg-gray-900 duration-200 ${
                        isChecked ? "translate-y-6 bg-primary" : ""
                    }`}
                    ></span>
                </span>
                <span className=" min-w-[90px] label flex items-center text-sm font-medium ">
                    <span className="pl-1"> {isChecked ? "Descending" : "Ascending"} </span>
                </span>
                </label>
        </div>
      )
    
}
export default sortingTools