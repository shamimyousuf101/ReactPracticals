import React from 'react';

const PromotionToolBar = (props) => {

    const savePromotion = (formData) => {

        function getTruthyList(list){

            let listArray = Array.from(list.entries());
            let truthyList = listArray.filter( item => item[1] === true )
            let str = "";

            truthyList.forEach(
            item => {
                str = str + item[0] + ", "}
            )

            return str;

        }

    if (formData) {
        getTruthyList(formData.devices);

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

