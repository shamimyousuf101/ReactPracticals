
import React, { Component } from 'react';

import SearchResult from './SearchResult'


class Search extends Component {

    state = {
        searchTerm:"",
        searchDisplay:[]
    };

    promotionData = {
        "promotions" : [
            {"name":"lapse Prevention", "startDate": "01 Jan 2019", "endDate": "20 Jan 2019"},
            {"name":"Welcome", "startDate": "03 Jan 2019", "endDate": "20 Feb 2019"},
            {"name":"Welcome Back", "startDate": "06 Jan 2019", "endDate": "22 Jan 2019"},
            {"name":"Cash Back", "startDate": "18 Jan 2019", "endDate": "30 Jan 2019"},
            {"name":"Play Day", "startDate": "01 Jan 2019", "endDate": "01 Mar 2019"},
            {"name":"New Play Day", "startDate": "01 Jan 2019", "endDate": "01 Mar 2019"}
        ]
    }

    handleInputChange = (event) => {
        const searchTerm = event.target.value;
        this.setState({searchTerm});
    }

    searchBtnClick = (event) => {
        
        const searchInput = this.state.searchTerm ;
        event.preventDefault();  
        console.log("search data is   " + this.state.searchTerm );

        this.setState({
            searchDisplay: this.promotionData.promotions.filter((el) =>  el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        });

    }

    getSearchItems( searchDisplay ){
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{
                return <SearchResult key={index} result={item}/>
            })
        } else {
            return <li>No matches found</li>
        }
    }

    render(){

        const { searchDisplay} = this.state;

        return(
            <div className="searchBox">
    
            <form className="searchForm">
                <input className="searchInput" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleInputChange}/>
                <button className="searchbtn" type="submit" onClick={this.searchBtnClick}> 
                  <img src="https://www.mockplus.com/images/search.png"/>
                </button>                    
              </form>
    
              <div className="searchResult">             
                <ul>
                    {  this.getSearchItems(searchDisplay)}
                </ul>              
              </div>
                                
            </div>
        );
    }
    
}

export default Search;