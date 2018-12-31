
import React from 'react';
import PropsTypes from 'prop-types'

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

SearchResultContainer.propTypes = {
    // result: PropsTypes.object, TODO array/object error
    editBtnClick: PropsTypes.func.isRequired
}

export default SearchResultContainer;
