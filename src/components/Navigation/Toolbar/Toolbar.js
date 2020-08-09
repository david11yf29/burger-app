import React from 'react';

// import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Toolbar.css';

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            {/* <div>
                <Logo />
            </div> */}
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar;