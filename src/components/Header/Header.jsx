import React from "react";
import {Link} from 'react-router-dom'

import s from "./header.module.scss"

const Header = () => {

    const [open, setOpen] = React.useState(false);

    return (
    <div className={s.header}>
        <div className={s.header__burger} onClick={() =>{ setOpen(!open); console.log(open)}}>
            <span></span>
        </div>
        <h1 className={s.header__title}>Вокально-инструментальный ансамбль Anacondaz</h1>
        <nav className={`${s.header__nav} ${open ? s._active : ''}`}>
            <div className={s.header__row}>
                <div className={s.nav__item}><Link to="/">Yatebya</Link></div>
                <div className={s.nav__item}><Link to="/Moideti">Moideti</Link></div>
                <div className={s.nav__item}><Link to="/Perezvoni">Perezvoni</Link></div>
                <div className={s.nav__item}><Link to="/Vihodi">Vihodi</Link></div>
            </div>
        </nav>
    </div>
    );
}

export default Header;