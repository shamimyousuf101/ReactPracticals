import React from 'react';

const MenuLinks = (props) => {

    return (
        <li className={props.className} onClick={props.onclick} ><a href={props.href}  >{props.text}</a></li>
    )
}

export default MenuLinks;