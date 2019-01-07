import React from 'react';
import PropsTypes from 'prop-types';

import MenuLinks from './MenuLinks';

import './Menu.css';

const Menu = ({menuData, clickHandler}) => {  
    return (
    <nav className="menu">
        <ul>
            {
            menuData.map( ({className, text}) => (<MenuLinks href={'#'} className={className} key={text} text={text} onclick={clickHandler}/>) )
            }
        </ul>
    </nav>
    )
}

Menu.propTypes = {
    menuData: PropsTypes.array.isRequired,
    clickHandler: PropsTypes.func.isRequired
}

export default Menu;