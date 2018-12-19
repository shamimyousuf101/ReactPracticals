import React from 'react';

import PromotionDetails from './PromotionDetails';
import PromotionImage from './PromotionImage';


const SingleSearchResult = (props) => {

    const goToPromotionBuilder = () => {
        console.log("I am in promotion builder page")
    }
    return(
        <div className="SingleSearchResult" onClick="goToPromotionBuilder()" >
            <PromotionDetails result={props.result} />
        </div>
    )
}

export default SingleSearchResult;