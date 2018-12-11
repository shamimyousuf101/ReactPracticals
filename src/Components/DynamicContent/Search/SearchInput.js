import React from 'react';

const SearchInput = (props) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={props.value} onChange={props.onChange}/>
    )
}

export default SearchInput;