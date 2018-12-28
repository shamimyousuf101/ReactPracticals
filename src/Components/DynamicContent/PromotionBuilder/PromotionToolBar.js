import React from 'react';
import PropsTypes from 'prop-types'


const PromotionToolBar = (props) => {

    const checkAllFieldHasData = formData => { return (formData.devices.size===0 || formData.ventures.size===0 || formData.url==="" || formData.name==="")}
    const checkAnyFieldHasData = formData => { return (formData.devices.size===0 && formData.ventures.size===0 && formData.url==="" && formData.name==="")}

    return (<div className="PromotionToolBar">
            <button className="save" disabled={checkAllFieldHasData(props.formData)} onClick={props.savePromotion}>Save</button>
            <button className="reset" disabled={checkAnyFieldHasData(props.formData)} onClick={props.reset}>Reset</button>
        </div>)
}

PromotionToolBar.PropsTypes ={
    formData: PropsTypes.object.isRequired, 
    savePromotion: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired
}

export default PromotionToolBar;

