import React from 'react';

import PromotionTitle from './PromotionTitle';


const SingleSearchResult = (props) => {

    return(
        <div>
       
            <PromotionTitle result={props.result} />
            
        </div>
    )
}

export default SingleSearchResult;