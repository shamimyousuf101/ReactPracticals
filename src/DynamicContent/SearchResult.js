
import React, { Component } from 'react';

const SearchResult = (props) => {

    return(
        <li key={props.index}>{props.result.name}</li>
    )

}

export default SearchResult;