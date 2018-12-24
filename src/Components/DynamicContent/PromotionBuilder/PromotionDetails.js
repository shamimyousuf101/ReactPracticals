import React from 'react';
import Asset from './Asset';
import InputBox from './InputBox';
import ListBox from './ListBox';
import deviceList from './deviceList';
import ventureList from './ventureList';

const PromotionDetails = (props) => {

    const  getDevices = (selectedPromotion) =>{
        if(selectedPromotion){
            return selectedPromotion.promotion.devices;
        }else {
            return null;
        }
    }

    const  getVentures = (selectedPromotion) =>{
        if(selectedPromotion){
            return selectedPromotion.promotion.ventures;
        }else {
            return null;
        }
    }


    const  getUrl = (selectedPromotion) =>{
        if(selectedPromotion){
            return selectedPromotion.promotion.url;
        }else {
            return null;
        }
    }

    const  getName = (selectedPromotion) =>{
        if(selectedPromotion){
            return selectedPromotion.promotion.name;
        }else {
            return null;
        }
    }

    return(<form className="promotionDetailsForm">
        <ListBox promotionData={getDevices(props.selectedPromotion)} displayItems={deviceList} legendText="Choose devices:"/>
        <ListBox promotionData={getVentures(props.selectedPromotion)} displayItems={ventureList} legendText="Choose ventures:"/>
        <InputBox promotionData={getUrl(props.selectedPromotion)} >URL:</InputBox>
        <InputBox promotionData={getName(props.selectedPromotion)} >Name:</InputBox>        
        <Asset/> 
    </form>)
}

export default PromotionDetails;