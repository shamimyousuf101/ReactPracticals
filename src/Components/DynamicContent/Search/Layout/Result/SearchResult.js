
import React from 'react';
import PropTypes from 'prop-types'
import PropsTypes from 'prop-types'

import SingleResult from './SingleResult/SingleResult';

const SearchResultContainer = ({editBtnClick, searchDisplay}) => {

    const getSearchItems = ( searchDisplay ) => {
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{                
                return <SingleResult key={index} id={item.id} result={item} editBtnClick={editBtnClick}/>
            })
        } 
    }

    return(
        <div>{getSearchItems(searchDisplay)}</div>
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
