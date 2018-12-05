import React from 'react';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
const SearchEntryContainer = (props) => {

    return(
        <form className="search__form">
            <SearchInput value={props.value} onChange={props.onChange}/>
            <SearchButton onClick={props.onClick}/>
        </form>
    )
}

export default SearchEntryContainer;