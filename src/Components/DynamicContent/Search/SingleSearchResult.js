import React from 'react';
import PromotionTitle from './PromotionTitle';

const SingleSearchResult = (props) => {

    return(
        <li>
            <PromotionTitle result={props.result}/>
        </li>
    )
}

export default SingleSearchResult;