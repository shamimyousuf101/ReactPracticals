import React from 'react';
import PropsTypes from 'prop-types'

import FormTitle from './PromotionForm/FormTitle/FormTitle';
import Form from './PromotionForm/Form/Form';
import PromotionToolBar from './PromotionToolBar/PromotionToolBar';
import './PromotionBuilder.css';

const PromotionBuilder = (props) => {
    
    return(<div className="PromotionBuilder">
        <FormTitle>{props.formData.name?props.formData.name:'new promotion'}</FormTitle>
        <Form formData={props.formData} onFormChange={props.onFormChange}/>
        <PromotionToolBar formData={props.formData} selectedPromotionId={props.selectedPromotionId} searchDisplay={props.searchDisplay} reset={props.reset} savePromotion={props.savePromotion}/>
    </div>)
}

PromotionBuilder.propTypes = {
    formData: PropsTypes.object.isRequired, 
    onFormChange: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    savePromotion: PropsTypes.func.isRequired
}

export default PromotionBuilder;