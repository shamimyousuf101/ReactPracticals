import React from 'react';
import PropsTypes from 'prop-types';

import './searchinput.css'

const SearchInput = ({handleInputChange, value}) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={value} onChange={(e) => handleInputChange(e.target.value)}/>
    )
}

SearchInput.propTypes = {
    value: PropsTypes.string,
    handleInputChange: PropsTypes.func.isRequired
}

export default SearchInput;