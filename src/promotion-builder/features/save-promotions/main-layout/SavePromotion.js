import React from 'react';
import PropsTypes from 'prop-types'

import FormTitle from '../sub-components/form-title/FormTitle'
import PromotionForm from '../sub-components/promotion-form/PromotionForm';
import ToolBar from '../sub-components/tool-bar/ToolBar';
import './savepromotion.css';

const SavePromotion = ({formData, onFormChange, reset, savePromotion, selectedPromotionId, searchDisplay}) => {
    
    return(<div className="PromotionBuilder">
        <FormTitle>{formData.name?formData.name:'new promotion'}</FormTitle>
        <PromotionForm formData={formData} onFormChange={onFormChange}/>
        <ToolBar formData={formData} selectedPromotionId={selectedPromotionId} searchDisplay={searchDisplay} reset={reset} savePromotion={savePromotion}/>
    </div>)
}


SavePromotion.propTypes = {
    formData: PropsTypes.object.isRequired, 
    onFormChange: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    savePromotion: PropsTypes.func.isRequired
}


export default SavePromotion;