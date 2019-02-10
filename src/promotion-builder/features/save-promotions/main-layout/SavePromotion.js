import React from 'react';
import PropsTypes from 'prop-types'

import PromotionForm from '../sub-components/promotion-form/PromotionForm';
import ToolBar from '../sub-components/tool-bar/ToolBar';
import './savepromotion.css';

const SavePromotion = ({formData, onFormChange, reset, savePromotion, selectedPromotionId, promotionData, view}) => {
    
    if (view === 'SavePromotion') {
        return(<div className="PromotionBuilder">
        <PromotionForm formData={formData} onFormChange={onFormChange}/>
        <ToolBar formData={formData} selectedPromotionId={selectedPromotionId} promotionData={promotionData} reset={reset} savePromotion={savePromotion}/>
    </div>)
    }
    return null;
}


SavePromotion.propTypes = {
    formData: PropsTypes.object.isRequired, 
    onFormChange: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    savePromotion: PropsTypes.func.isRequired
}


export default SavePromotion;