import React from "react";
import bem from "bem-cn";


const b = bem("single");

const SinglePreviewItem = ({ result, editBtnClick, view }) => (
  <li className={b()}>

    <h3>{result.name}</h3>

{console.log(result.url)}
    <img className="h" src={require('./images.png')}  width="500" height="200"/>

    <div>
        <input type="radio" id={result.id} name={result.name} value={result.name}></input>
    </div>

  </li>
);


export default SinglePreviewItem;
