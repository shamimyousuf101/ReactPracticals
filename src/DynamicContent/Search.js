import React from 'react';

const Search = (props) => {

    const promotionData = [
        {"name":"lapse Prevention", "startDate": "01 Jan 2019", "endDate": "20 Jan 2019"},
        {"name":"Welcome", "startDate": "03 Jan 2019", "endDate": "20 Feb 2019"},
        {"name":"Welcome Back", "startDate": "06 Jan 2019", "endDate": "22 Jan 2019"},
        {"name":"Cash Back", "startDate": "18 Jan 2019", "endDate": "30 Jan 2019"},
        {"name":"Play Day", "startDate": "01 Jan 2019", "endDate": "01 Mar 2019"}
    ]

    const searchBtnClick = (event) => {
        const searchInput = document.querySelector(".searchInput");
        event.preventDefault();  
        console.log("search data is   " + searchInput.value);
    }

    return(
        <div className="searchBox">

        <form className="searchForm">
            <input className="searchInput" type="text" placeholder="Search"/>
            <button className="searchbtn" type="submit" onClick={searchBtnClick}> 
              <img src="https://www.mockplus.com/images/search.png"/>
            </button>                    
          </form>
                            
        </div>
    )

}

export default Search;