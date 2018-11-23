import React from 'react';
import MenuLinks from './MenuLinks';

const Menu = ({menuData, clickHandler}) => {  
    return (
    <nav className="navBar"><ul>{
        menuData.map( ({className, text}) => (<MenuLinks href={'#'} className={className} key={text} text={text} onclick={clickHandler}/>) )
    }</ul></nav>
    )
}

export default Menu;