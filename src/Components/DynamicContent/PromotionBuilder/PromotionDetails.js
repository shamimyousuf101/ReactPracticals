import React from 'react';
import Asset from './Asset';
import InputBox from './InputBox';
import ListBox from './ListBox';

const PromotionDetails = () => {
    return(<form className="promotionDetailsForm">
        <ListBox legendText="Choose devices:"/>
        <ListBox legendText="Choose ventures:"/>
        <InputBox>URL:</InputBox>
        <InputBox>Name:</InputBox>
        <Asset/> 
    </form>)
}

export default PromotionDetails;