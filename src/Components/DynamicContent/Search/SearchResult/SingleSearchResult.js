import React from 'react'; 
import PropsTypes from 'prop-types'

import PromotionDetails from './PromotionDetails';
import EditButton from './EditButton';


const SingleSearchResult = ({result, id, editBtnClick}) => {

    return(
        <div className="SingleSearchResult">
            <PromotionDetails result={result} />
            <EditButton id={id} editBtnClick={editBtnClick} />
        </div>
    )
}

SingleSearchResult.propTypes = {
    result: PropsTypes.object, 
    id: PropsTypes.string,
    editBtnClick: PropsTypes.func.isRequired
}

export default SingleSearchResult;