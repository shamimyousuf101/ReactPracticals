import React from 'react';
import PropsTypes from 'prop-types';

const SearchInput = ({value, onChange}) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={value} onChange={onChange}/>
    )
}

SearchInput.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired
}

export default SearchInput;