import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul className="header-links">
                    <Link className="logo" to="/">Healthy life</Link>
                    <Link to="/diety">Diety/Blog</Link>
                    <Link to="/omnie">O mnie</Link>
                    <Link to="/kalkulator">Kalkulator BMI</Link>
                    <Link to="/zaloguj">Zaloguj</Link>

            </ul>
        </header>
    );
};

export default Header;