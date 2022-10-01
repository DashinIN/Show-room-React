import React from "react"
import useHover from "../../hooks/useHover";

import s from "./imageWrapper.module.scss"


const ImageWrapper = ({img, audioFile}) => {


    const ref = React.useRef();
    const isHovering = useHover(ref, audioFile);
    
    return (
        <>
            <img ref={ref} className={`${s.image} ${isHovering ? s.hover : ''}`} src={img} alt="" />
            
         </>
    );
}

export default ImageWrapper