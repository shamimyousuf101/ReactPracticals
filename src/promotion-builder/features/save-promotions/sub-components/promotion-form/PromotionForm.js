import React from 'react';
import PropTypes from 'prop-types';

import InputBox from '../inputbox/InputBox';
import CheckboxGroup from '../checkboxgroup/CheckboxGroup';
import {devices} from '../../../../../domain/devices';
import {ventures} from '../../../../../domain/ventures';

import './promotionform.css'

const PromotionForm = ({formData, onFormChange}) => {

    const {devices : deviceLabels, ventures : ventureLabels, url, name} = formData;

    return(<form className="promotionDetailsForm" >
        <CheckboxGroup value={deviceLabels} name="devices" displayItems={devices} legendText="Choose devices:" onFormChange={onFormChange}/>
        <CheckboxGroup value={ventureLabels} name="ventures" displayItems={ventures} legendText="Choose ventures:" onFormChange={onFormChange}/>
        <InputBox value={url} name="url" onFormChange={onFormChange} >URL:</InputBox>
        <InputBox value={name} name="name" onFormChange={onFormChange} >Name:</InputBox>        
    </form>)
}


PromotionForm.propTypes = {
    formData: PropTypes.shape({
        devices: PropTypes.instanceOf(Map),
        id: PropTypes.string,
        lastUpdatedTime: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        ventures: PropTypes.instanceOf(Map)
      }).isRequired,
    onFormChange: PropTypes.func.isRequired
}


export default PromotionForm;