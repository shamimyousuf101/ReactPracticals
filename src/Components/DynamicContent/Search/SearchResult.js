
import React from 'react';

const SearchResult = ({key, result: {name, startDate, endDate}}) => {

    return(
        <tr key={key}>        
            <td>{name}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
        </tr>
    )

}

export default SearchResult;
