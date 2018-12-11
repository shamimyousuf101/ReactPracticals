
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
        console.log("i am clicked")
        const searchInput = this.state.searchTerm ;
        console.log("searchInput "+ searchInput);
        event.preventDefault();  
        this.setState({
            searchDisplay: promotionData.promotions.filter((el) =>  el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        });
        console.log("i am filtered in theory")
        console.log(this.state.searchDisplay);
    }

    render(){
        return(<div>
            <SearchEntryContainer value={this.state.searchTerm} onChange={this.handleInputChange} onSearchClick={this.searchBtnClick}/>
            <SearchResultContainer result={this.state.searchDisplay}/>
        </div>)
    }
       image7
}

export default Search;