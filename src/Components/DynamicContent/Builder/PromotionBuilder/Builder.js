import React from 'react';
import PropsTypes from 'prop-types'

import FormTitle from '../PromotionForm/FormTitle/FormTitle';
import Form from '../PromotionForm/Form/Form';
import ToolBar from '../PromotionToolBar/ToolBar';
import './Builder.css';

const Builder = ({formData, onFormChange, reset, savePromotion, selectedPromotionId, searchDisplay}) => {
    
    return(<div className="PromotionBuilder">
        <FormTitle>{formData.name?formData.name:'new promotion'}</FormTitle>
        <Form formData={formData} onFormChange={onFormChange}/>
        <ToolBar formData={formData} selectedPromotionId={selectedPromotionId} searchDisplay={searchDisplay} reset={reset} savePromotion={savePromotion}/>
    </div>)
}


Builder.propTypes = {
    formData: PropsTypes.object.isRequired, 
    onFormChange: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    savePromotion: PropsTypes.func.isRequired
}


export default Builder;