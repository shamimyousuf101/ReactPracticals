import React from 'react';

import PromotionTitle from './PromotionTitle';
import PromotionStartDate from './PromotionStartDate';
import PromotionEndDate from './PromotionEndDate';
import PromotionImage from './PromotionImage';


const SingleSearchResult = (props) => {

    return(
        <div>
            <PromotionImage result={props.result} />
            <PromotionTitle result={props.result} />
            <PromotionStartDate result={props.result} />
            <PromotionEndDate result={props.result} /> 
        </div>
    )
}

export default SingleSearchResult;