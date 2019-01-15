import React from 'react';
import PropsTypes from 'prop-types';

import Links from './Links';

import './navigation.css';

const Navigation = ({menuData, clickHandler}) => {  
    return (
    <nav className="menu">
        <ul>
            {
            menuData.map( ({className, text}) => (<Links href={'#'} className={className} key={text} text={text} onclick={clickHandler}/>) )
            }
        </ul>
    </nav>
    )
}

Navigation.propTypes = {
    menuData: PropsTypes.array.isRequired,
    clickHandler: PropsTypes.func.isRequired
}

export default Navigation;