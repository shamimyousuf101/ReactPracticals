import React from 'react';

const PromotionImage = (props) => {
    const imgStyle = {width: '100px', height: '100px'} ;
    return(          
        <img src={props.result.asset} alt="promotion" style={imgStyle} />
    )
}

export default PromotionImage;