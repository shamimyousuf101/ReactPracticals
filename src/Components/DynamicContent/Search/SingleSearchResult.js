import React from 'react';

import PromotionDetails from './PromotionDetails';
import EditButton from './EditButton';


const SingleSearchResult = (props) => {

    return(
        <div className="SingleSearchResult">
            <PromotionDetails result={props.result} />
            <EditButton id={props.id} editBtnClick={props.editBtnClick} />
        </div>
    )
}

export default SingleSearchResult;