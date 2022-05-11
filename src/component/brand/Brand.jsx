import React from "react";
import { useState } from "react";

function Brand (){
    const [brand,setBrand] = useState([
        {img: "/apple.png"},
        {img: "/samsaung.png"},
        {img: "/google.svg"},
        {img: "/oneplus.svg"},
        {img: "/mi.svg"},
        {img: "/realme.svg"},
        {img: "/huawei.svg"},
    ])
    return(
        <div className="flex flex-col items-start mx-auto max-w-7xl p-5 pt-3">
            <div className="w-4/5 sm:w-11/12 mx-auto text-left mt-5 text-xl font-medium sm:text-base mobile:text-sm">VIEW BY BRANDS</div>
            <div className="w-4/5 sm:w-11/12 mx-auto flex flex-row justify-between flex-wrap items-center mt-4">
                {brand.map((e)=>
                    <img src={e.img} className="h-16 w-16 sm:h-10 sm:w-10 mr-3 mt-3 cursor-pointer" /*w-20*/ />
                )}
                <div className="cursor-pointer hover:underline text-sm text-red">View More</div>
            </div>
        </div>
    )
}

export default Brand;