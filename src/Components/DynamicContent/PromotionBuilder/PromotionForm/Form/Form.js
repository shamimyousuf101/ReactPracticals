import React from 'react';
import PropsTypes from 'prop-types'

import InputBox from '../InputBox/InputBox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import {devices} from '../../../../../domain/devices';
import {ventures} from '../../../../../domain/ventures';

import './Form.css'

const Form = ({formData, onFormChange}) => {

    const {devices : deviceLabels, ventures : ventureLabels, url, name} = formData;

        return(<form className="promotionDetailsForm" >
            <CheckboxGroup value={deviceLabels} name="devices" displayItems={devices} legendText="Choose devices:" onFormChange={onFormChange}/>
            <CheckboxGroup value={ventureLabels} name="ventures" displayItems={ventures} legendText="Choose ventures:" onFormChange={onFormChange}/>
            <InputBox value={url} name="url" onFormChange={onFormChange} >URL:</InputBox>
            <InputBox value={name} name="name" onFormChange={onFormChange} >Name:</InputBox>        
        </form>)
}

Form.propTypes = {
    formData: PropsTypes.objectOf(PropsTypes.shape({
        devices: PropsTypes.arrayOf(PropsTypes.string),
        id: PropsTypes.number,
        lastUpdatedTime: PropsTypes.string,
        name: PropsTypes.string,
        url: PropsTypes.string,
        ventures: PropsTypes.arrayOf(PropsTypes.string)
      })).isRequired,
    onFormChange: PropsTypes.func.isRequired
}

export default Form;