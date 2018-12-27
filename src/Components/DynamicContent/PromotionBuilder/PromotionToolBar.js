import React from 'react';
import getTruthyList from '../../../utils/utils'

const PromotionToolBar = (props) => {

    const savePromotion = (formData) => {

        if (formData) {
            let data = " New Promotion Details: " + "\n" + 
            "Name: " + formData.name + "\n" + 
            "Url: " + formData.url + "\n" + 
            "Devices: " + getTruthyList(formData.devices ) + "\n" + 
            "Ventures: " + getTruthyList(formData.ventures) ;
            alert(data);
        }
    }


    const checkAllFieldHasData = formData => { return (formData.devices.size===0 || formData.ventures.size===0 || formData.url==="" || formData.name==="")}
    const checkAnyFieldHasData = formData => { return (formData.devices.size===0 && formData.ventures.size===0 && formData.url==="" && formData.name==="")}

    return (<div className="PromotionToolBar">
            <button className="save" disabled={checkAllFieldHasData(props.formData)} onClick={() => savePromotion(props.formData)}>Save</button>
            <button className="reset" disabled={checkAnyFieldHasData(props.formData)} onClick={props.reset}>Reset</button>
        </div>)
}

export default PromotionToolBar;

