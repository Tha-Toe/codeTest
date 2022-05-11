import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGratipay} from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";

function PromotionCard(){
    return(
        <motion.div className=" flex flex-col items-start mr-4 text-sm  relative w-28 sm:w-20 " >
            <img src="/productImg.png" className="bg-lightGray rounded w-full pevent" />
            <div className=" text-left text-xl overflow-hidden truncate w-24 sm:w-20 sm:text-base mobile:text-sm" >Sample Product with long name</div>
            <div className="text-red">54000 Ks</div>
            <div className="pl-3 pr-3 sm:pl-1 sm:pr-1 mobile:pr-1 mobile:pl-1 text-white md:text-xs bg-red absolute top-0 left-0">00% off</div>
            <FontAwesomeIcon icon={faGratipay} className="text-xl mobile:text-base absolute top-1 right-1 cursor-pointer hover:text-red"/>
        </motion.div>
    )
}
export default PromotionCard;