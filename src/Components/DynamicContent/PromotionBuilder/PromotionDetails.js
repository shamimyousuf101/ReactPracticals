import React from 'react';
import Asset from './Asset';
import InputBox from './InputBox';
import CheckboxContainer from './CheckboxContainer';
import deviceList from './deviceList';
import ventureList from './ventureList';

const PromotionDetails = (props) => {

        return(<form className="promotionDetailsForm" >
            <CheckboxContainer value={props.formData.deviceList} name="deviceList" displayItems={deviceList} legendText="Choose devices:" onFormChange={props.onFormChange}/>
            <CheckboxContainer value={props.formData.ventureList} name="ventureList" displayItems={ventureList} legendText="Choose ventures:" onFormChange={props.onFormChange}/>
            <InputBox value={props.formData.url} name="url" onFormChange={props.onFormChange} >URL:</InputBox>
            <InputBox value={props.formData.name} name="name" onFormChange={props.onFormChange} >Name:</InputBox>        
            <Asset/> 
        </form>)
}

export default PromotionDetails;