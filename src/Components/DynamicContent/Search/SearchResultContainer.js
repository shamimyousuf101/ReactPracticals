
import React from 'react';

import SingleSearchResult from './SingleSearchResult';

const SearchResultContainer = (props) => {

    const getSearchItems = ( searchDisplay ) => {
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{                
                return <SingleSearchResult key={index} id={item.id} result={item} editBtnClick={props.editBtnClick}/>
            })
        } 
    }

    return(
        <div>{getSearchItems(props.result)}</div>
    )
    
}

export default SearchResultContainer;
