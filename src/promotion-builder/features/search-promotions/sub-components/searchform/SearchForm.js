import React from 'react';
import PropsTypes from 'prop-types';

import SearchInput from '../searchinput/SearchInput'


const SearchForm = ({value, onChange}) => {

    return(
        <form className="search__form">
            <img className='button__search' src="/search.png" alt="search"/>
            <SearchInput value={value} onChange={onChange}/>
        </form>
    )
}


SearchForm.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired
}


export default SearchForm;