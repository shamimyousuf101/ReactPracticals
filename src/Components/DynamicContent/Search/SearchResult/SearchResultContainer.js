
import React from 'react';
import PropTypes from 'prop-types'
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
        <div>{getSearchItems(props.searchDisplay)}</div>
    )
    
}

SearchResultContainer.propTypes = {
    searchDisplay: PropTypes.arrayOf(PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        ventures: PropTypes.arrayOf(PropTypes.string)
      })),
    editBtnClick: PropsTypes.func.isRequired
}

export default SearchResultContainer;
