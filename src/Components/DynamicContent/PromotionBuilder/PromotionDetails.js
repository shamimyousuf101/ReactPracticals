import React from 'react';
import Asset from './Asset';
import InputBox from './InputBox';
import ListBox from './ListBox';
import deviceList from './deviceList';
import ventureList from './ventureList';

const PromotionDetails = (props) => {
    return(<form className="promotionDetailsForm">
        <ListBox promotionData={props.selectedPromotion.promotion.devices} displayItems={deviceList} legendText="Choose devices:"/>
        <ListBox promotionData={props.selectedPromotion.promotion.ventures} displayItems={ventureList} legendText="Choose ventures:"/>
        <InputBox promotionData={props.selectedPromotion.promotion.url}>URL:</InputBox>
        <InputBox promotionData={props.selectedPromotion.promotion.name}>Name:</InputBox>        
        <Asset/> 
    </form>)
}

export default PromotionDetails;