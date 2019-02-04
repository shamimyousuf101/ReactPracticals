import React from 'react';
import PropsTypes from 'prop-types';

import './searchinput.css'

const SearchInput = ({setSearchTerm, value}) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={value} onChange={(e) => setSearchTerm(e.target.value)}/>
    )
}

SearchInput.propTypes = {
    value: PropsTypes.string,
    handleInputChange: PropsTypes.func.isRequired
}

export default SearchInput;