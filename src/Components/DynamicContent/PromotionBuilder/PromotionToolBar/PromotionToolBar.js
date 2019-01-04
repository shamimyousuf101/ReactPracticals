import React from 'react';
import PropsTypes from 'prop-types'
import isEqual from 'lodash.isequal'

import { arrayToMap } from '../../../../utils/utils'


const PromotionToolBar = (props) => {

    const promotionData = promotionData;
    const checkAllFieldHasData = formData => { return !(formData.devices.size===0 || formData.ventures.size===0 || formData.url==="" || formData.name==="")}
    const checkAnyFieldHasData = formData => { return (formData.devices.size===0 && formData.ventures.size===0 && formData.url==="" && formData.name==="")}

    const isFormDataSame = (id, formData, searchDisplay) => {
        let initialFormData = {
            id: 0,
            devices: new Map(),
            ventures: new Map(),
            url: "",
            name: ""
          };

          let sameData = true;

          const promotionArray = Object.keys(searchDisplay).map(key => searchDisplay[key]);
          initialFormData = promotionArray.filter(el => el.id=== id)[0];

     
          let cloneOfInitialFormData = Object.assign({}, initialFormData);
          delete cloneOfInitialFormData.lastUpdatedTime;

            if(cloneOfInitialFormData){
                cloneOfInitialFormData = Object.assign({}, 
                    cloneOfInitialFormData, 
                    {devices: arrayToMap(cloneOfInitialFormData.devices),
                        ventures: arrayToMap(cloneOfInitialFormData.ventures)}
                );
                sameData = isEqual(cloneOfInitialFormData, formData);
            }else{
                sameData=false;
            }

          return (sameData);    
    }

    const isSaveButtonDisabled = (id, formData, searchDisplay) => {

        let hasDataInAllFields = checkAllFieldHasData(formData)
        let disabled = true;

        if(hasDataInAllFields) {
            disabled = isFormDataSame(id,formData, searchDisplay);
        }else {
            disabled = !hasDataInAllFields;
        }

        return disabled;
    }

    return (<div className="PromotionToolBar">
            <button className="save" disabled={isSaveButtonDisabled(props.selectedPromotionId, props.formData, props.searchDisplay)} onClick={props.savePromotion}>Save</button>
            <button className="reset" disabled={checkAnyFieldHasData(props.formData)} onClick={props.reset}>Reset</button>
        </div>)
}

PromotionToolBar.propTypes ={
    formData: PropsTypes.object.isRequired, 
    savePromotion: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired
}

export default PromotionToolBar;

