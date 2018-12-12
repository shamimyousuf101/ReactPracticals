import React from 'react';

const PromotionDetails = (props) => {
    return(   
        <div className="promotionDetails">
            <h4>{props.result.name}</h4>
            <p>Start Date: {props.result.startDate}</p>
            <p>End Date: {props.result.endDate}</p>
        </div>
    )
}

export default PromotionDetails;