import React from 'react';
import DeviceList from './DeviceList';
import VentureList from './VentureList';
import URL from './URL';
import Name from './Name';
import Asset from './Asset';

const PromotionDetails = () => {
    return(<div className="PromotionDetails">
    <DeviceList/>
    <VentureList/>
    <URL/>
    <Name/>
    <Asset/>
    </div>)
}

export default PromotionDetails;