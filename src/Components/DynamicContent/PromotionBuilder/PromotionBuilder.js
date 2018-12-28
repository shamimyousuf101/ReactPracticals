import React from 'react';
import PropsTypes from 'prop-types'

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

PromotionBuilder.propTypes = {
    formData: PropsTypes.object.isRequired, 
    onFormChange: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    savePromotion: PropsTypes.func.isRequired
}

export default PromotionBuilder;