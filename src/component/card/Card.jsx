import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGratipay} from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";

function Card(){
    return(
        <motion.div className=" flex flex-col items-start mr-4 text-sm  relative w-24 sm:w-20 mobile:w-16" >
            <img src="/productImg.png" className="bg-lightGray rounded w-full pevent" />
            <div className=" text-left text-xl overflow-hidden truncate w-24 sm:w-20" >Sample Product with long name</div>
            <div className="text-red">54000 Ks</div>
            <FontAwesomeIcon icon={faGratipay} className="text-xl absolute top-1 right-1 cursor-pointer hover:text-red"/>
        </motion.div>
    )
}
export default Card;