
import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { promotionData } from './../Config/promotionData';

class Search extends Component {

    state = {
        searchTerm:"",
        searchDisplay:[]
    };

    handleInputChange = event =>  this.setState({searchTerm: event.target.value});
    
    searchBtnClick = (event) => {        
        const searchInput = this.state.searchTerm ;
        event.preventDefault();  
        this.setState({
            searchDisplay: promotionData.promotions.filter((el) =>  el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
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