import React from 'react';

const MenuLinks = (props) => {

    return (
        <li id="menuLinks" className={props.className} onClick={props.onclick} ><a href={props.href}  >{props.text}</a></li>
    )
}

export default MenuLinks;