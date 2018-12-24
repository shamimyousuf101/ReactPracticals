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
            return [];
        }
    }

    const  getVentures = (selectedPromotion) =>{
        if(selectedPromotion){
            return selectedPromotion.promotion.ventures;
        }else {
            return [];
        }
    }


    const  getUrl = (selectedPromotion) =>{

        console.log(selectedPromotion.length)
        if(selectedPromotion.length >0){
            return selectedPromotion.promotion.url;
        }else {
            return [];
        }
    }

    const  getName = (selectedPromotion) =>{
        if(selectedPromotion.length >0){
            return selectedPromotion.promotion.name;
        }else {
            return [];
        }
    }

    return(<form className="promotionDetailsForm">
        <ListBox promotionData={() => getDevices(props.selectedPromotion)} displayItems={deviceList} legendText="Choose devices:"/>
        <ListBox promotionData={() => getVentures(props.selectedPromotion)} displayItems={ventureList} legendText="Choose ventures:"/>
        <InputBox promotionData={getUrl(props.selectedPromotion)} >URL:</InputBox>
        <InputBox promotionData={() => getName(props.selectedPromotion)} >Name:</InputBox>        
        <Asset/> 
    </form>)
}

export default PromotionDetails;