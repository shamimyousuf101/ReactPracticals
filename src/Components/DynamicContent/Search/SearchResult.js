
import React, { Component } from 'react';

const SearchResult = ({key, result}) => {

    return(
        <tr key={key}>        
            <td>{result.name}</td>
            <td>{result.startDate}</td>
            <td>{result.endDate}</td>
        </tr>
    )

}

export default SearchResult;