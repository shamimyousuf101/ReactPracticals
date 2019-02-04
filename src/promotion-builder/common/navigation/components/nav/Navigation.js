import React from 'react';

import  Links from '../links/Links';
import { navigationData } from '../../navigationData'

import './navigation.css';

const Navigation = ({changeView}) => {  


    return (
    <nav className="menu">
        <ul>
            {
            navigationData.map( ({className, view, text}) => (<Links href={'#'} className={className} key={text} text={text} menuClickHandler={() => changeView(view)}/>) )
            }
        </ul>
    </nav>
    )
}

export default Navigation;



