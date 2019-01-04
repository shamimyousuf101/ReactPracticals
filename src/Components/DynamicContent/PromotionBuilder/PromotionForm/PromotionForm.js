import React from 'react';
import PropsTypes from 'prop-types'

import InputBox from './InputBox';
import CheckboxContainer from './CheckboxContainer';
import {devices} from '../../../../domain/devices';
import {ventures} from '../../../../domain/ventures';

const PromotionForm = (props) => {

        return(<form className="promotionDetailsForm" >
            <CheckboxContainer value={props.formData.devices} name="devices" displayItems={devices} legendText="Choose devices:" onFormChange={props.onFormChange}/>
            <CheckboxContainer value={props.formData.ventures} name="ventures" displayItems={ventures} legendText="Choose ventures:" onFormChange={props.onFormChange}/>
            <InputBox value={props.formData.url} name="url" onFormChange={props.onFormChange} >URL:</InputBox>
            <InputBox value={props.formData.name} name="name" onFormChange={props.onFormChange} >Name:</InputBox>        
        </form>)
}

PromotionForm.propTypes = {
    formData: PropsTypes.object.isRequired,
    onFormChange: PropsTypes.func.isRequired
}

export default PromotionForm;