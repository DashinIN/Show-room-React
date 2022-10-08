import React from "react";



export default function useHover(ref, songFile, volume) {



    const [isHovering, setHovering] = React.useState(false);

    const song = new Audio(songFile);
    song.volume=volume;

    const turnOn = () => {
        setHovering(true);
        if (volume>0) 
        song.play();
    }

    const turnOff = () => {
        setHovering(false);
        song.pause();
    }

    React.useEffect( () => {
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