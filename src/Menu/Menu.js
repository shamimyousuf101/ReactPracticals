import React from 'react';

import MenuLinks from './MenuLinks';

const Menu = (props) => {
    
    const menu = props.menuData; //array

    const clickHandler = props.clickHandler;
  
    return (
    <nav className="navBar"><ul>{

        menu.map( (link) => {
            return <MenuLinks href={'#'} className={link.className} text={link.text} onclick={clickHandler}/>
            }
        )
    }</ul></nav>
    )
}

export default Menu;