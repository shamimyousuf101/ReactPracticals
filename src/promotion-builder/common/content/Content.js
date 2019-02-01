import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import AssetManager from '../../features/upload-assets/main-layout/AssetManager';
import Search from '../../features/search-promotions/main-layout/Search';
import SavePromotion from '../../features/save-promotions/main-layout/SavePromotion';

import './content.css'

const Content = ({view, searchDisplay, searchTerm, handleInputChange, formData, savePromotion, reset, onFormChange, selectedPromotionId, searchBtnClick, editBtnClick }) => {

    const setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search 
                // searchDisplay={searchDisplay} 
                // searchTerm={searchTerm} 
                // onInputChange={handleInputChange} 
                // onSearchClick={searchBtnClick} 
                editBtnClick={editBtnClick}/>                
            case "AssetManager":
                return <AssetManager/>     
            case "SavePromotion":
                return <SavePromotion 
                reset={reset} 
                savePromotion={savePromotion} 
                formData={formData} 
                searchDisplay={searchDisplay} 
                onFormChange={onFormChange} 
                selectedPromotionId={selectedPromotionId}/>                              
            default:
                throw new Error('Unexpected view supplied')                
        }    
    }

    return (<div className="content"> 
                <div className="dynamiccontent">    
                    {setContent(view)}
                </div>
            </div>)
    
    
}

Content.propTypes = {
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

export default Content;