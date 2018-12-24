import React, {Component} from 'react';

import AssetManager from './../../Components/DynamicContent/Asset/AssetManager';
import Search from './../../Components/DynamicContent/Search/Search';
import PromotionBuilder from './../../Components/DynamicContent/PromotionBuilder/PromotionBuilder';
import { promotionData } from './PromotionBuilder/promotionData';

class Container extends Component {


    




    setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search searchDisplay={this.props.searchDisplay} searchTerm={this.props.searchTerm} onInputChange={this.props.handleInputChange} onSearchClick={this.props.searchBtnClick} editBtnClick={this.props.editBtnClick}/>                
            case "Upload":
                return <AssetManager/>     
            case "PromotionBuilder":
                return <PromotionBuilder reset={this.props.reset} formData={this.props.formData} onFormChange={this.props.onFormChange}/>                              
            default:
                throw new Error('Unexpected view supplied')                
        }    
    }

    render(){
        return (<div className="content"> 
                <div className="dynamiccontent">    
                    {this.setContent(this.props.view)}
                </div>
            </div>)
    } 
    
}

export default Container;