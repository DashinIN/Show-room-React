import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <>
        <div className="header__burger">
            <span></span>
        </div>
        <h1 className="header__title">Вокально-инструментальный ансамбль Anacondaz</h1>
        <nav className="header__nav">
            <div className="header__row">
                <div className="header__nav-item"><Link to="/">Yatebya</Link></div>
                <div className="header__nav-item"><Link to="/Moideti">Moideti</Link></div>
                <div className="header__nav-item"><Link to="/Perezvoni">Perezvoni</Link></div>
                <div className="header__nav-item"><Link to="/Vihodi">Vihodi</Link></div>
            </div>
        </nav>
    </>
    );
}

export default Header;