
import React from 'react';

const ListBoxItem = (props) => {
    return(
        <div className="listBoxItem">
        <input type="checkbox" name={props.name}></input>
          <label htmlFor={props.name}>{props.children}</label>
        </div>
        )
}

export default ListBoxItem;