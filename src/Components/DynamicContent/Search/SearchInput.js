import React from 'react';
import PropsTypes from 'prop-types';

const SearchInput = (props) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={props.value} onChange={props.onChange}/>
    )
}

SearchInput.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired
}

export default SearchInput;