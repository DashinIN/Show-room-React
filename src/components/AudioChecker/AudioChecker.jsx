
import s from "./audioChecker.module.scss"
import { NavLink} from 'react-router-dom'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import  Yatebya  from '../../pages/Yatebya/Yatebya';
import  Moideti  from '../../pages/Moideti/Moideti';
import  Perezvoni  from '../../pages/Perezvoni/Perezvoni';
import  Vihodi  from '../../pages/Vihodi/Vihodi';
import Layout from '../Layout';

const AudioChecker = () => {

    const [isShown, setIsShown] = React.useState(true);

    const handleClick = (event) => {
       
        setIsShown(current => !current);
    };

    return (
        <>
        <div  style={{display: isShown ? '' : 'none'}} className={s.audiocheck}>
            <NavLink onClick={handleClick} to="/" className={s.audiocheck__left} >
                <div className={s.audiocheck__promt}>
                    Нет
                </div>
            </NavLink>
            <NavLink onClick={handleClick} to="/" className={s.audiocheck__right} >
                <div className={s.audiocheck__promt}>
                    Да
                </div>
            </NavLink>
            <div className={s.audiocheck__title}>Разрешить проигрывать звук?</div>
        </div>

        <Routes>
            <Route path="/"  element={<Layout/>}>  
              <Route path="/" element={<Navigate replace to="/Yatebya" />} />
              <Route path="Yatebya" element={<Yatebya />} />
              <Route path="Moideti" element={<Moideti />} />
              <Route path="Perezvoni" element={ <Perezvoni /> } />
              <Route path="Vihodi" element={<Vihodi/>} />
              <Route path="*" element={<Navigate replace to="/Yatebya" />} />
            </Route>
        </Routes>

        </>
    );
}

export default AudioChecker;