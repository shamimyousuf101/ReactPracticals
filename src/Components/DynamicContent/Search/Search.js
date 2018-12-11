
import React, {Component} from 'react';
import SearchResultContainer from './SearchResultContainer';
import SearchEntryContainer from './SearchEntryContainer';
import { promotionData } from './../Config/promotionData';

class Search extends Component {

    state = {
        searchTerm:"",
        searchDisplay:[]
    };

    handleInputChange = event =>  this.setState({searchTerm: event.target.value});

    searchBtnClick = event => {        
        const searchInput = this.state.searchTerm ;
        event.preventDefault();  
        this.setState({
            searchDisplay: promotionData.promotions.filter((el) =>  el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        });
    }

    render(){
        return(<div>
            <SearchEntryContainer value={this.state.searchTerm} onChange={this.handleInputChange} onSearchClick={this.searchBtnClick}/>
            <SearchResultContainer result={this.state.searchDisplay}/>
        </div>)
    }
}

export default Search;