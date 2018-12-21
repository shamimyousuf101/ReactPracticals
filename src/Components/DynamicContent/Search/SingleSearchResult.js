import React from 'react';

import PromotionDetails from './PromotionDetails';
import EditButton from './EditButton';


const SingleSearchResult = (props) => {

    return(
        <div className="SingleSearchResult">
            <PromotionDetails result={props.result} />
            <button className="edit__button" type="submit" onClick={() => props.editBtnClick(props.id)} >Edit</button> 
        </div>
    )
}

export default SingleSearchResult;