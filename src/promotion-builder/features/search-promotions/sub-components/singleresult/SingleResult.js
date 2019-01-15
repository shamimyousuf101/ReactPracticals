import React from 'react'; 
import PropsTypes from 'prop-types'

import PromotionDetails from '../promotion-details/PromotionDetails';
import EditButton from '../editbutton/EditButton';


const SingleResult = ({result, id, editBtnClick}) => {

    return(
        <div className="SingleSearchResult">
            <PromotionDetails result={result} />
            <EditButton id={id} editBtnClick={editBtnClick} />
        </div>
    )
}

SingleResult.propTypes = {
    result: PropsTypes.object, 
    id: PropsTypes.string,
    editBtnClick: PropsTypes.func.isRequired
}

export default SingleResult;