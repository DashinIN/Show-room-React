import React from "react";
import { NavLink} from 'react-router-dom'

import s from "./header.module.scss"

const Header = () => {

    const [open, setOpen] = React.useState(false);

    return (
    <div className={s.header}>
        <div className={`${s.header__burger} ${open ? s._active : ''}`} onClick={() =>setOpen(!open)}>
            <span></span>
        </div>
        <h1 className={s.header__title}>Вокально-инструментальный ансамбль Anacondaz</h1>
        <nav className={`${s.header__nav} ${open ? s._active : ''}`}>
            <div className={s.header__row}>
                <div className={s.nav__item}><NavLink to="/Yatebya" className={({ isActive }) => (isActive ? s.active : "")}>Yatebya</NavLink></div>
                <div className={s.nav__item}><NavLink to="/Moideti" className={({ isActive }) => (isActive ? s.active : "")}>Moideti</NavLink></div>
                <div className={s.nav__item}><NavLink to="/Perezvoni" className={({ isActive }) => (isActive ? s.active : "")}>Perezvoni</NavLink></div>
                <div className={s.nav__item}><NavLink to="/Vihodi" className={({ isActive }) => (isActive ? s.active : "")}>Vihodi</NavLink></div>
            </div>
        </nav>
    </div>
    );
}

export default Header;