import React from 'react';
import {Link} from "react-router-dom";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <ul className="logo-list">
                <Link className="logo2" to="/">Healthy life</Link>
                <p className="copyright">&copy;</p>
            </ul>
            <ul className="footer-links">
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/politykaprywatnosci">Polityka Prywatności</Link>
            </ul>
            <ul className="social">
                <a href="https://www.facebook.com/"><FacebookRoundedIcon className="facebook" fontSize="large" /></a>
                <a href="https://www.instagram.com/"><InstagramIcon className="instagram" fontSize="large" /></a>

            </ul>
        </footer>
    );
};

export default Footer;