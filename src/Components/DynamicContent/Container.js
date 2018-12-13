import React from 'react';

import AssetManager from './../../Components/DynamicContent/Asset/AssetManager';
import Search from './../../Components/DynamicContent/Search/Search';

const Container = ({view}) => {

    const setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search/>                
            case "Upload":
                return <AssetManager/>                                   
            default:
                throw new Error('Unexpected view supplied')                
        }    
    }

    return (<div className="content"> 
                <div className="dynamiccontent">    
                    {setContent(view)}
                </div>
           </div>)
}

export default Container;