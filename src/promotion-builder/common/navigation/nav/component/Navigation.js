import React from 'react';

import Links from '../../links/Links';
import { navigationData } from '../../navigationData'

import './navigation.css';

const Navigation = () => {  
    return (
    <nav className="menu">
        <ul>
            {
            navigationData.map( ({className, text}) => (<Links href={'#'} className={className} key={text} text={text}/>) )
            }
        </ul>
    </nav>
    )
}

export default Navigation;



