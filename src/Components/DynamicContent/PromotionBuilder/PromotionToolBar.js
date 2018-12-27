import React from 'react';


const PromotionToolBar = (props) => {

    const checkAllFieldHasData = formData => { return (formData.devices.size===0 || formData.ventures.size===0 || formData.url==="" || formData.name==="")}
    const checkAnyFieldHasData = formData => { return (formData.devices.size===0 && formData.ventures.size===0 && formData.url==="" && formData.name==="")}

    return (<div className="PromotionToolBar">
            <button className="save" disabled={checkAllFieldHasData(props.formData)} onClick={props.savePromotion}>Save</button>
            <button className="reset" disabled={checkAnyFieldHasData(props.formData)} onClick={props.reset}>Reset</button>
        </div>)
}

export default PromotionToolBar;

