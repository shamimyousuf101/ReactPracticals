import React from 'react';
import NewPromotionTitle from './NewPromotionTitle';
import PromotionDetails from './PromotionDetails';
import PromotionToolBar from './PromotionToolBar';

const PromotionBuilder = (props) => {


    
    return(<div className="PromotionBuilder">
        <NewPromotionTitle/>
        <PromotionDetails selectedPromotion={props.selectedPromotion}/>
        <PromotionToolBar selectedPromotion={props.selectedPromotion} reset={props.reset}/>
    </div>)
}

export default PromotionBuilder;