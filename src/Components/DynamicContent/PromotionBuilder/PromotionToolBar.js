import React from 'react';

const PromotionToolBar = (props) => {

    const savePromotion = (selectedPromotion) => {

        let data = " New Promotion Details: " + "\n" + 
                    "Id: " + selectedPromotion.id + "\n" + 
                    "Name: " + selectedPromotion.promotion.name + "\n" + 
                    "Url: " + selectedPromotion.promotion.url + "\n" + 
                    "Devices: " + selectedPromotion.promotion.devices + "\n" + 
                    "Ventures: " + selectedPromotion.promotion.ventures;
        alert(data);
    }

    const resetPromotion = () => {
        alert("I am an resetPromotion box!");
    }

    return (<div className="PromotionToolBar">
        <button className="save" onClick={() => savePromotion(props.selectedPromotion)}>Save</button>
        <button className="reset" onClick={props.reset}>Reset</button>
    </div>)
}

export default PromotionToolBar;

