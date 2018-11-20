
import React, { Component } from 'react';


class Search extends Component {

    state = {
        searchTerm:"",
        searchDisplay:"no matches found"
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

    handleInputChange=(event) => {
        const searchTerm = event.target.value;
        this.setState({searchTerm});

    }

    searchBtnClick = (event) => {
        let  resultArr = [];
        
        const searchInput = event.target;
        event.preventDefault();  
        console.log("search data is   " + searchInput.value);

        var arr = [];


        for(let i in this.promotionData.promotions){
            arr.push(this.promotionData.promotions[i].name);
        }

        function filterItems(query) {
            return arr.filter(function(el) {
                return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
        }

        resultArr = filterItems(searchInput.value);

        console.log("resultArr.length   is equal to " + resultArr.length);

        if(resultArr.length === 0){
            this.setState({searchDisplay: 'No Matches Found'});
           
        }else{
            this.setState({searchDisplay: 'Found'});
        }
    }

    render(){


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
                {this.state.searchDisplay}
                </div>
              
              </div>
                                
            </div>
        );
    }
    

}

export default Search;