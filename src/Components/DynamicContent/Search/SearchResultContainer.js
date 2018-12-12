
import React, {Component} from 'react';
import SearchResult from './SearchResult';

class SearchResultContainer extends Component {

    getSearchItems( searchDisplay ){
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{                
                return <SearchResult key={index} result={item}/>
            })
        } 
    }

    render(){
        return(
            <div> {this.getSearchItems(this.props.result)} </div>
        )
    }
}

export default SearchResultContainer;
