import React from 'react';
import Asset from './Asset';
import InputBox from './InputBox';
import CheckboxContainer from './CheckboxContainer';
import devices from './devices';
import ventures from './ventures';

const PromotionDetails = (props) => {

        return(<form className="promotionDetailsForm" >
            <CheckboxContainer value={props.formData.devices} name="devices" displayItems={devices} legendText="Choose devices:" onFormChange={props.onFormChange}/>
            <CheckboxContainer value={props.formData.ventures} name="ventures" displayItems={ventures} legendText="Choose ventures:" onFormChange={props.onFormChange}/>
            <InputBox value={props.formData.url} name="url" onFormChange={props.onFormChange} >URL:</InputBox>
            <InputBox value={props.formData.name} name="name" onFormChange={props.onFormChange} >Name:</InputBox>        
            <Asset/> 
        </form>)
}

export default PromotionDetails;