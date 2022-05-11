import React, { useState } from "react";
import Card from "../card/Card";
import {motion} from "framer-motion";
import { useRef,useEffect } from "react";


function Tablet() {
    const [width,setWidth] = useState();
    const parentRef = useRef();

    useEffect(() => {
        const total = parentRef.current.scrollWidth - parentRef.current.offsetWidth;
        setWidth(total);
    },[])
    const [productList,setProductList] = useState([1,2,3,4,5,6])
    return(
        <div className="max-w-7xl mx-auto flex flex-col  p-5 border-t-solid border-t-2 border-lightGray">
            <div className="w-4/5 mx-auto flex flex-row items-center justify-between mt-5">
                <div className="flex flex-row items-center">
                    <img src="/Asset 45.png" className="h-14 w-14 "/>
                    <div className="text-xl font-medium">TABLET</div>
                </div>
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
export default Tablet;