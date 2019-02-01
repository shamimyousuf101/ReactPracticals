import React from 'react';

import PropTypes from 'prop-types';

import './Links.css'

const Links = ({className, menuClickHandler, href, text}) => {

    return (
        <li id="menu__links" className={className} onClick={menuClickHandler}>
            <a href={href} >{text}</a>
        </li>
    )
}

Links.propTypes = {
    className : PropTypes.string,
    menuClickHandler : PropTypes.func,
    href : PropTypes.string,
    text : PropTypes.string
}

export default Links;