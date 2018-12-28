import React from 'react';

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
                return <PromotionBuilder reset={props.reset} savePromotion={props.savePromotion} formData={props.formData} onFormChange={props.onFormChange}/>                              
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

export default Container;