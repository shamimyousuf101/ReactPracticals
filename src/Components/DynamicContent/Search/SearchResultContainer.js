
import React, {Component} from 'react';

import SingleSearchResult from './SingleSearchResult';

class SearchResultContainer extends Component {

    getSearchItems( searchDisplay ){
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{                
                return <SingleSearchResult key={index} id={item.id} result={item} editBtnClick={this.props.editBtnClick}/>
            })
        } 
    }

    render(){
        return(
            <div>{this.getSearchItems(this.props.result)}</div>
        )
    }
}



export default SearchResultContainer;
