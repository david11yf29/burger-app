import React from 'react';

import burgerLogo from '../../assets/burger-logo.png';

import './Logo.css';

const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default Logo;