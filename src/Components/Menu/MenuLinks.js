import React from 'react';

const MenuLinks = ({className, onclick, href, text}) => {

    return (
        <li id="menu__links" className={className} onClick={onclick} ><a href={href}  >{text}</a></li>
    )
}

export default MenuLinks;