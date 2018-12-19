import React from 'react';
import NewPromotionTitle from './NewPromotionTitle';
import PromotionDetails from './PromotionDetails';
import PromotionToolBar from './PromotionToolBar';

const PromotionBuilder = () => {
    return(<div className="PromotionBuilder">
        <NewPromotionTitle/>
        <PromotionDetails/>
        <PromotionToolBar/>
    </div>)
}

export default PromotionBuilder;