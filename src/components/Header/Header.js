//import components & css file & font awesome external react node pakage
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

//header arrow fuction
const Header = () => {
    return (
        //header part of html (jsx) & font awesome icon
        <div className="header">
            <h1>Make Your<span className="text"> Devloper  <FontAwesomeIcon icon={faCode} /></span> Team</h1>
            <h3>Select your Devloper team and Start the project. Finish the teamwork before deadline within the budget.</h3>
            <h2>Total budget : 10 millon</h2>
        </div>
    );
};

//export default header file
export default Header;