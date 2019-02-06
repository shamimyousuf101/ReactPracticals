import React from 'react';
import PropsTypes from 'prop-types';

import block from 'bem-cn';
const b = block('button');

const SearchButton = ({onSearchClick}) => {

    return(
        <button className={b('search')} type="submit" onClick={onSearchClick}> 
            <img src="/search.png" alt="search"/>
        </button> 
    )
}

SearchButton.propTypes = {
    onSearchClick: PropsTypes.func.isRequired
}

export default SearchButton;