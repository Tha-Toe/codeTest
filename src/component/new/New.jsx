import React, { useState } from "react";
import Card from "../card/Card";
import {motion} from "framer-motion";
import { useRef,useEffect } from "react";

function New() {
    const [width,setWidth] = useState();
    const parentRef = useRef();

    useEffect(() => {
        const total = parentRef.current.scrollWidth - parentRef.current.offsetWidth;
        setWidth(total);
    },[])
    const [productList,setProductList] = useState([1,2,3,4,5,6])
    return(
        <div className="max-w-7xl mx-auto flex flex-col p-5">
            <div className="w-4/5 mx-auto flex items-center flex-row justify-between mt-5">
                <div className="text-xl font-medium">NEW ARRIVALS</div>
                <div className="cursor-pointer hover:underline text-xs">View More</div>
            </div>
            <motion.div className="w-4/5 mx-auto  mt-3 overflow-auto scrollBar" ref={parentRef} whileTap = {{cursor: "grabbing"}}>
                <motion.div className="flex flex-row justify-between"
                        drag = "x"
                        dragConstraints = {{right: 0, left: -width}}
                >
                    {productList.map((e)=>
                        <Card />
                    )}
                </motion.div>
            </motion.div>        
        </div>
    )
}
export default New;