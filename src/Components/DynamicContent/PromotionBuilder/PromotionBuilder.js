import React from 'react';
import NewPromotionTitle from './NewPromotionTitle';
import PromotionDetails from './PromotionDetails';
import PromotionToolBar from './PromotionToolBar';

const PromotionBuilder = () => {
    return(<div>
        <NewPromotionTitle/>
        <PromotionDetails/>
        <br></br>
        <PromotionToolBar/>
    </div>)
}

export default PromotionBuilder;