import React from 'react';
import PropsTypes from 'prop-types';

const PromotionDetails = ({result}) => {

    const {name, url, devices, ventures} = result;

    return(   
        <div className="promotionDetails">
            <h4>Name: {name}</h4>
            <p>Url: {url}</p>
            <p>Devices: {devices.toString()}</p>
            <p>Ventures: {ventures.toString()}</p>
        </div>
    )
}

PromotionDetails.propTypes = {
    result: PropsTypes.object.isRequired
}

export default PromotionDetails;