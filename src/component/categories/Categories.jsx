import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./categories.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Categories (){
    const [categories,setCategories] = useState([
        {img: "/Asset 42.png"},
        {img: "/Asset 43.png"},
        {img: "/Asset 44.png"},
        {img: "/Asset 45.png"},
        {img: "/Asset 46.png"},
    ])
    return(
        <div className="flex flex-col max-w-7xl mx-auto ">
            <div className="mt-5 font-medium text-xl">CATEGORIES</div>
            <div className="flex flex-row flex-wrap justify-center  items-center mt-4">
                {categories.map((e)=>
                <div className="flex flex-col items-center mr-10 md:mr-2 cursor-pointer ">
                    <img src={e.img} className="h-24 w-24 md:h-16 md:w-16 sm:h-10 sm:w-10"/>
                    <div className="sm:text-xs sm:h-12 sm:w-12">Sample Category</div>
                </div>)}
                <div className=" bg-yellow mobile:p-1 flex flex-col items-center text-gray cursor-pointer hover:bg-lightGray p-10 md:p-5 sm:p-2 rounded-full">
                    <FontAwesomeIcon icon={faEllipsis} className="text-3xl sm:text-2xl cursor-pointer"/>
                    <div className="sm:text-xs ">View All</div>
                </div>
            </div>
        </div>
        
    )
}
export default Categories;