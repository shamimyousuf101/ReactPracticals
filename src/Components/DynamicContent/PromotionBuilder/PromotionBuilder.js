import React from 'react';
import NewPromotionTitle from './NewPromotionTitle';
import PromotionDetails from './PromotionDetails';
import PromotionToolBar from './PromotionToolBar';

const PromotionBuilder = (props) => {
    
    return(<div className="PromotionBuilder">
        <NewPromotionTitle/>
        <PromotionDetails  formData={props.formData} onFormChange={props.onFormChange}/>
        <PromotionToolBar formData={props.formData} reset={props.reset} savePromotion={props.savePromotion}/>
    </div>)
}

export default PromotionBuilder;