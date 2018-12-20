import React from 'react';

const PromotionToolBar = () => {

    const savePromotion = () => {
        alert("I am an savePromotion box!");
    }

    const resetPromotion = () => {
        alert("I am an resetPromotion box!");
    }

    return (<div className="PromotionToolBar">
        <button className="save" onClick={savePromotion}>Save</button>
        <button className="reset" onClick={resetPromotion}>Reset</button>
    </div>)
}

export default PromotionToolBar;

