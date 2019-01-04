import React from 'react';
import PropsTypes from 'prop-types'

import FormTitle from './PromotionForm/FormTitle';
import PromotionForm from './PromotionForm/PromotionForm';
import PromotionToolBar from './PromotionToolBar/PromotionToolBar';

const PromotionBuilder = (props) => {
    
    return(<div className="PromotionBuilder">
        <FormTitle/>
        <PromotionForm  formData={props.formData} onFormChange={props.onFormChange}/>
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