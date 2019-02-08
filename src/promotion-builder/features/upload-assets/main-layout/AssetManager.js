import React from 'react';

import './assetmanager.css';

const AssetManager = ({view}) => {

        // TODO - Would break this component down into smaller components

        if(view==='AssetManager') {
            return(
                <div className="upload__box">
                    <input className="upload__button" type="file"></input>
                </div>
            )
        } 

        return null;

    
}

export default AssetManager;