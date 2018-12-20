import React from 'react';

const PromotionDetails = (props) => {
    return(   
        <div className="promotionDetails">
            <h4>Name: {props.result.promotion.name}</h4>
            <p>Url: {props.result.promotion.url}</p>
            <p>Devices: {props.result.promotion.devices}</p>
            <p>Ventures: {props.result.promotion.ventures}</p>
        </div>
    )
}

export default PromotionDetails;