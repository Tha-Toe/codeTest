import React from "react";
import "./nav.css";

function Nav () {
    return(
        <>
        <div className="container box-border h-auto max-w-7xl mx-auto my-0 relative ">
            <img src={"/navBackground.jpg"} className="h-96  z-0 mx-auto object-cover"/>
            <div className="flex flex-row flex-wrap justify-between sm:justify-center items-center
                            z-1 absolute top-0 left-0 right-0  
                            w-4/5 md:w-full mx-auto pt-4 sm:pt-1 ">
                <div className='bg-blackRgba w-80 md:w-60  md:ml-5 h-10 flex flex-row justify-between items-center rounded-xl px-4'>
                    <input type="text" placeholder="Search Product" className="bg-transparent focus:outline-none w-4/5 placeholder-white text-white"/>
                    <img src="/Asset 32.svg" className="w-4 h-4"/>
                </div>
                <div className="flex flex-row items-center">
                    <select class="form-select form-select-lg mb-3
                        block
                        w-full
                        px-2 sm:px-1
                        py-2 sm:py-1
                        text-x
                        font-normal
                        bg-transparent 
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:bg-transparent  active:bg-transparent focus:border-none focus:outline-none text-white cursor-pointer mr-3 sm:mr-1" >
                        <option value="1" className="text-black cursor-pointer hover:bg-transparent">Ks</option>
                    </select>
                    <img src="/Asset 34.svg" className="w-10 h-10 sm:w-8 sm:h-8 sm:mr-1 mr-2 cursor-pointer"/>
                    <img src="/Asset 33.svg" className="w-10 h-10 sm:w-8 sm:h-8 sm:mr-1 mr-2 cursor-pointer"/>
                    <img src="/Asset 35.svg" className="w-10 h-10 sm:w-8 sm:h-8 sm:mr-1 mr-2 cursor-pointer"/>
                    <img src="/Asset 36.svg" className="w-10 h-10 sm:w-8 sm:h-8 sm:mr-1 mr-2 cursor-pointer"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Nav;