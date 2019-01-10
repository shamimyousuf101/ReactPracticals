import React from 'react';
import PropsTypes from 'prop-types';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';


const SearchEntryContainer = ({value, onChange, onSearchClick}) => {

    return(
        <form className="search__form">
            <SearchInput value={value} onChange={onChange}/>
            <SearchButton onSearchClick={onSearchClick}/>
        </form>
    )
}


SearchEntryContainer.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired,
    onSearchClick: PropsTypes.func.isRequired
}


export default SearchEntryContainer;