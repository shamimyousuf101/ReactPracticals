import React from 'react';

import PromotionDetails from './PromotionDetails';
import PromotionImage from './PromotionImage';


const SingleSearchResult = (props) => {

    return(
        <div className="SingleSearchResult">
            <PromotionImage result={props.result} />
            <PromotionDetails result={props.result} />
        </div>
    )
}

export default SingleSearchResult;