
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

    getTableHeaders(searchDisplay){
        if (searchDisplay.length > 0){
            return <tr><th>Name</th><th>Start Date</th><th>End Date</th></tr>
        }
    }

    getSearchItems( searchDisplay ){
        if (searchDisplay.length > 0){
            return searchDisplay.map((item, index)=>{                
                return <SearchResult key={index} result={item}/>
            })
        } 
    }

    getNoMatchesString(searchDisplay){
        if (searchDisplay.length == 0){
            return  <p>No matches found</p>
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
    
                <br/>

              <div className="searchResult">    
              {this.getNoMatchesString(searchDisplay)}            
                <table>        
                    {this.getTableHeaders(searchDisplay)}            
                    {this.getSearchItems(searchDisplay)}
                </table>              
              </div>
                                
            </div>
        );
    }
    
}

export default Search;