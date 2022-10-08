
import s from "./audioChecker.module.scss"
import React from 'react';

import AudioContext from "../../context"


const AudioChecker = () => {

    const [isShown, setIsShown] = React.useState(true);

    const value = React.useContext(AudioContext);

    const choiseVolume = (promt) => {
        if (promt===true) {
            value.setVolume(0.5);
        } 
            setIsShown(current => !current);
    };

    return (
        <>
        <div  style={{display: isShown ? '' : 'none'}} className={s.audiocheck}>
            <div onClick={() => choiseVolume(false)}  className={s.audiocheck__left} >
                <div className={s.audiocheck__promt}>
                    Нет
                </div>
            </div>
            <div onClick={() => choiseVolume(true)}  className={s.audiocheck__right} >
                <div className={s.audiocheck__promt}>
                    Да
                </div>
            </div>
            <div className={s.audiocheck__title}>Разрешить проигрывать звук?</div>
        </div>

        
        </>
    );
}

export default AudioChecker;