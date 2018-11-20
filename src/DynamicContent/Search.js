
import React, { Component } from 'react';


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
            {"name":"Play Day", "startDate": "01 Jan 2019", "endDate": "01 Mar 2019"}
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

        const arr = this.promotionData.promotions.map( ({ name, startDate, endDate}) => ( {name, startDate, endDate} ));
        console.log(arr);

        this.setState({
            searchDisplay: arr.filter((el) =>  el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
        });
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

                <div>
                {searchDisplay.length > 0 ? "searchDisplay" : "No Matches found"}
                </div>
              
              </div>
                                
            </div>
        );
    }
    

}

export default Search;