import React from 'react';

const PromotionImage = (props) => {
    const imgStyle = {width: '500px', height: '600px'} ;
    return(          
        <img src={props.result.asset} alt="promotion" style={imgStyle} />
    )
}

export default PromotionImage;