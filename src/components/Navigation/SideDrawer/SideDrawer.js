import React from 'react';

// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close";

    if (props.open) {
        attachedClasses = "SideDrawer Open";
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses}>
                {/* <div>
                    <Logo />
                </div> */}
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>  
    )
}

export default SideDrawer;