import React from 'react';
import PropsTypes from 'prop-types';

const PromotionImage = (props) => {
    const imgStyle = {width: '100px', height: '150px'} ;
    return(          
        <img src={props.result.asset} alt="promotion" style={imgStyle} />
    )
}

PromotionImage.propTypes = {
    result: PropsTypes.object
}

export default PromotionImage;