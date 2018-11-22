
import React, { Component } from 'react';

const SearchResult = (props) => {

    return(
        <tr key={props.index}>        
            <td>{props.result.name}</td>
            <td>{props.result.startDate}</td>
            <td>{props.result.endDate}</td>
        </tr>
    )

}

export default SearchResult;