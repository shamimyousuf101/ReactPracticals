import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

// import "./singleresult.css";


const b = bem("single");

const SinglePreviewItem = ({ result, editBtnClick, view }) => (
  <li className={b()}>

    <h3>{result.name}</h3>

<img className="h" src="fff.png"  width="500" height="200"/>

    <div>
        <input type="radio" id="dewey" name={result.name} value={result.name}></input>
        {/* <label for={result.name}>{result.name}</label> */}
    </div>


  </li>
);


export default SinglePreviewItem;
