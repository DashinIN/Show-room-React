import React from "react"
import useHover from "../../hooks/useHover";

import s from "./imageWrapper.module.scss"

import AudioContext from "../../context"

const ImageWrapper = ({img, audioFile}) => {

    const value = React.useContext(AudioContext);

    const ref = React.useRef();


    const isHovering = useHover(ref, audioFile, value.volume);
    
    return (
        <>
            <img ref={ref} className={`${s.image} ${isHovering ? s.hover : ''}`} src={img} alt="" />
            
         </>
    );
}

export default ImageWrapper