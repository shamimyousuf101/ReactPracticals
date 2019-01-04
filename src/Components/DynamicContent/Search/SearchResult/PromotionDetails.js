import React from 'react';
import PropsTypes from 'prop-types';

const PromotionDetails = (props) => {

    return(   
        <div className="promotionDetails">
            <h4>Name: {props.result.name}</h4>
            <p>Url: {props.result.url}</p>
            <p>Devices: {props.result.devices.toString()}</p>
            <p>Ventures: {props.result.ventures.toString()}</p>
        </div>
    )
}

PromotionDetails.propTypes = {
    result: PropsTypes.object.isRequired
}

export default PromotionDetails;