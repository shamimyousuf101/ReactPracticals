import React from 'react';

import PromotionTitle from './PromotionTitle';
import PromotionStartDate from './PromotionStartDate';
import PromotionEndDate from './PromotionEndDate';
import PromotionImage from './PromotionImage';


const SingleSearchResult = (props) => {

    return(
        <div className="SingleSearchResult">
            <PromotionImage result={props.result} />
            <div className="promotionDetails">
                <PromotionTitle result={props.result} />
                <PromotionStartDate result={props.result} />
                <PromotionEndDate result={props.result} /> 
            </div>
        </div>
    )
}

export default SingleSearchResult;