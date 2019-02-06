import React from 'react';
import PropsTypes from 'prop-types';

import Links from '../links/Links';

import './navigation.css';

import bem from 'bem-cn';
const b = bem('navigation');

const Navigation = ({menuData, clickHandler}) => {  
    return (
    <nav className={b()}>
        <ul>
            {
            menuData.map( ({className, text}) => (<Links href={'#'} className={className} key={text} text={text} clickHandler={clickHandler}/>) )
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