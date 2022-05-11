import React from "react";

function Bottom (){
    return(
        <>
        <div className="max-w-7xl mx-auto border-t-solid border-t-2 border-lightGray bg-red flex flex-col items-center">
            <div className="w-4/5 sm:w-11/12 mx-auto flex flex-row items-center flex-wrap justify-between ">
                <div className="flex flex-col justify-start items-start my-5 mobile:my-2">
                    <div className=" text-left text-base sm:text-base mobile:text-sm text-white mt-2 mb-2">Customer Service</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2">Terms & Privacy Policy</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2">Return Policy</div>
                </div>
                <div className="flex flex-col justify-start items-start my-5 mobile:my-2">
                    <div className=" text-left text-base sm:text-base mobile:text-sm text-white mt-2 mb-2">Language</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2">Myanmar (Unicode)</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2">English</div>
                </div>
                <div className="flex flex-col justify-start items-start my-5 mobile:my-2">
                    <div className=" text-left text-base sm:text-base mobile:text-sm text-white mt-2 mb-2">Contact Us</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2 ">No 17B, MyayKha St, Mayangone, 6 Miles, Yangon, Myanmar</div>
                    <div className=" text-left text-sm sm:text-sm mobile:text-xs text-white mt-2 mb-2">+95 9 345 454 345</div>
                </div>
            </div>
        </div>
        <div className=" text-sm sm:text-xs mobile:text-xxs text-black mt-2 mb-2">All rights reserved. Made wit all the love in ShopDoora Co., Ltd.</div>
        </>
    )
}

export default Bottom;