import React from 'react';

const PromotionDetails = (props) => {
    return(   
        <div className="promotionDetails">
            <h4>Name: {props.result.name}</h4>
            <p>Url: {props.result.url}</p>
            <p>Devices: {props.result.devices}</p>
            <p>Ventures: {props.result.ventures}</p>
        </div>
    )
}

export default PromotionDetails;