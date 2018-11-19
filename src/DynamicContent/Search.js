import React from 'react';

const Search = (props) => {

    const searchBtnClick = (event) => {
        const table = document.querySelector("table");
        event.preventDefault();
        table.style.display = "block";       
    }

    return(
        <div className="searchBox">

        <form class="searchForm">
            <input type="text" placeholder="Search"/>
            <button className="searchbtn" type="submit" onClick={searchBtnClick}> 
              <img src="https://www.mockplus.com/images/search.png"/>
            </button>                    
          </form>
                    
          <table>       
            <tr>
              <th>Promotion Image</th>
              <th>Name</th> 
              <th>Start date</th>
              <th>End date</th>
            </tr>            
            <tr>
              <td> Lapse Prevention Image</td>
              <td> Lapse Prevention </td>
              <td> Start date</td>
              <td> End date </td>
            </tr>             
          </table>
        
        </div>
    )

}

export default Search;