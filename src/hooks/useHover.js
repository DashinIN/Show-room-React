import { useState, useEffect } from "react";

export default function useHover(ref, songFile) {

    const [isHovering, setHovering] = useState(false);

    const song = new Audio(songFile);
    song.volume=0.5;

    const turnOn = () => {
        setHovering(true);
        song.play();
    }

    const turnOff = () => {
        setHovering(false);
        song.pause();
    }

    useEffect( () => {
        if(!ref.current){
            return;
        }
        const node = ref.current;

        node.addEventListener("focusin",turnOn);
        node.addEventListener("focusout",turnOff);
        node.addEventListener("mouseenter", turnOn);
        node.addEventListener("mouseleave", turnOff);

        return function() {
            node.removeEventListener("focusin", turnOn);
            node.removeEventListener("focusout", turnOff);
            node.removeEventListener("mouseenter", turnOn);
            node.removeEventListener("mouseleave",turnOff);
    
        }
    }, []);


    return isHovering;
}