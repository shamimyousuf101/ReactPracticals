import React from 'react';

const Links = ({className, onclick, href, text}) => {

    return (
        <li id="menu__links" className={className} onClick={onclick} ><a href={href}  >{text}</a></li>
    )
}

export default Links;