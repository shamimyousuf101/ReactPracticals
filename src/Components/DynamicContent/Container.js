import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import AssetManager from './../../Components/DynamicContent/Asset/AssetManager';
import Search from './../../Components/DynamicContent/Search/Search';
import PromotionBuilder from './../../Components/DynamicContent/PromotionBuilder/PromotionBuilder';

const Container = (props) => {

    const setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search searchDisplay={props.searchDisplay} searchTerm={props.searchTerm} onInputChange={props.handleInputChange} onSearchClick={props.searchBtnClick} editBtnClick={props.editBtnClick}/>                
            case "Upload":
                return <AssetManager/>     
            case "PromotionBuilder":
                return <PromotionBuilder reset={props.reset} savePromotion={props.savePromotion} formData={props.formData} searchDisplay={props.searchDisplay} onFormChange={props.onFormChange} selectedPromotionId={props.selectedPromotionId}/>                              
            default:
                throw new Error('Unexpected view supplied')                
        }    
    }

   
    return (<div className="content"> 
            <div className="dynamiccontent">    
                {setContent(props.view)}
            </div>
        </div>)
    
    
}

Container.propTypes = {
    view: PropsTypes.string.isRequired,
    searchDisplay: PropTypes.arrayOf(PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        ventures: PropTypes.arrayOf(PropTypes.string)
      })),
    searchTerm: PropsTypes.string,
    handleInputChange: PropsTypes.func.isRequired,
    formData: PropsTypes.object,
    savePromotion: PropsTypes.func.isRequired,
    reset: PropsTypes.func.isRequired,
    onFormChange: PropsTypes.func.isRequired

}

export default Container;