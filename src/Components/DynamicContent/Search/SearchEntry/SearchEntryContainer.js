import React from 'react';
import PropsTypes from 'prop-types';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
const SearchEntryContainer = (props) => {

    return(
        <form className="search__form">
            <SearchInput value={props.value} onChange={props.onChange}/>
            <SearchButton onSearchClick={props.onSearchClick}/>
        </form>
    )
}

SearchEntryContainer.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired,
    onSearchClick: PropsTypes.func.isRequired
}

export default SearchEntryContainer;