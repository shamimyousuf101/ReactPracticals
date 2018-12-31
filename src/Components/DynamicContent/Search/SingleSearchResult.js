import React from 'react'; 
import PropsTypes from 'prop-types'

import PromotionDetails from './PromotionDetails';
import EditButton from './EditButton';


const SingleSearchResult = (props) => {

    return(
        <div className="SingleSearchResult">
            <PromotionDetails result={props.result} />
            <EditButton id={props.id} editBtnClick={props.editBtnClick} />
        </div>
    )
}

SingleSearchResult.propTypes = {
    result: PropsTypes.object, //TODO - no error why
    id: PropsTypes.string,
    editBtnClick: PropsTypes.func.isRequired
}

export default SingleSearchResult;