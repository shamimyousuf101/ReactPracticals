import React from 'react';

const PromotionTitle = (props) => {
    console.log(props);
    return(
        
        <h2>{props.result.name}</h2>
    )
}

export default PromotionTitle;