import React from "react";
import { useRef,useState,useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import "./car.css"



function Car (){


    const [width,setWidth] = useState();
    const parentRef = useRef();

    useEffect(() => {
        const total = parentRef.current.scrollWidth - parentRef.current.offsetWidth;
        setWidth(total);


    },[])

    return(
        <div className="max-w-7xl mx-auto flex flex-row justify-center p-5 border-t-solid border-t-2 border-lightGray" style={{width: "100%"}}>
            <motion.div className="bg-blackRgba  flex flex-col justify-center relative z-3" style={{"min-width": 30,left:30}}><FontAwesomeIcon icon={faArrowLeft} className="text-3xl text-white cursor-pointer"/></motion.div>
            <motion.div className=" overflow-auto z-2 scrollBar" ref={parentRef} whileTap = {{cursor: "grabbing"}}>
                    <motion.div className="flex flex-row z-2"                     
                        drag = "x"
                        dragConstraints = {{right: 0, left: -width}}
                    >
                        <div className="z-2" >
                            <img src="/car1.jpg" className="h-80  md:h-40 max-w-xl md:w-80 z-2 pevent"  />
                        </div>
                        <div className="z-2" >
                            <img src="/car2.jpg" className="h-80 md:h-40 max-w-xl md:w-80 pevent z-2" />
                        </div>
                        <div className="z-2" >
                            <img src="/car3.jpg" className="h-80 md:h-40 max-w-xl md:w-80 pevent z-2" />
                        </div>
                    </motion.div>
            </motion.div>
            <motion.div className=" bg-blackRgba w-14 flex flex-col justify-center relative  z-3" style={{"min-width": 30,right:30}}><FontAwesomeIcon icon={faArrowRight} className="text-3xl text-white cursor-pointer"/></motion.div>
        </div>
    )
}

export default Car;