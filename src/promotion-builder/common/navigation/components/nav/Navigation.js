import React from 'react';

import  Links from '../links/Links';
import { navigationData } from '../../navigationData'

import './navigation.css';

const Navigation = ({selectNavLink}) => {  


    return (
    <nav className="menu">
        <ul>
            {
            navigationData.map( ({className, view, text}) => (<Links href={'#'} className={className} key={text} text={text} menuClickHandler={() => selectNavLink(view)}/>) )
            }
        </ul>
    </nav>
    )
}

export default Navigation;



