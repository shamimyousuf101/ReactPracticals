import React, {Component} from 'react';

import AssetManager from './../../Components/DynamicContent/Asset/AssetManager';
import Search from './../../Components/DynamicContent/Search/Search';
import PromotionBuilder from './../../Components/DynamicContent/PromotionBuilder/PromotionBuilder';
import { promotionData } from './PromotionBuilder/promotionData';

class Container extends Component {

    state = {
        searchTerm:"",
        searchDisplay:promotionData.promotions,
        selectedPromotion:null,
        formData: {
            deviceList: new Map(),
            ventureList: new Map(),
            url: "",
            name: ""
        }
    };

    handleInputChange = event =>  this.setState({searchTerm: event.target.value});

    searchBtnClick = event => {      
        const searchInput = this.state.searchTerm;
        let promotionArray = Object.keys(promotionData.promotions).map(key =>promotionData.promotions[key]); 
        event.preventDefault();  
        this.setState({
            searchDisplay: promotionArray.filter((el) =>  el.promotion.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        });
    }

    editBtnClick = (id) => {      
        let promotionArray = Object.keys(promotionData.promotions).map(key =>promotionData.promotions[key]); 

        this.setState({
            selectedPromotion: promotionArray.filter((item) =>  item.id === id)[0]
        });
    }

    reset = () => {
        alert("reset is called");
        this.setState({
            selectedPromotion:null
        });
    }


    onFormChange = (value, formField) => {
        this.setState( (prevState) =>{
            return {
                formData: { ...prevState.formData, [formField]: value }
            }
        }
        )
    }

    setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search searchDisplay={this.state.searchDisplay} searchTerm={this.state.searchTerm} onInputChange={this.handleInputChange} onSearchClick={this.searchBtnClick} editBtnClick={this.editBtnClick}/>                
            case "Upload":
                return <AssetManager/>     
            case "PromotionBuilder":
                return <PromotionBuilder selectedPromotion={this.state.selectedPromotion} reset={this.reset} formData={this.state.formData} onFormChange={this.onFormChange}/>                              
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