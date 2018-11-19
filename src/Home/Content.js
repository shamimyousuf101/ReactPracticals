import React from 'react';

import AssetManager from './../DynamicContent/AssetManager';
import ConfigManager from './../DynamicContent/ConfigManager';
import Search from './../DynamicContent/Search';

const Content = ({view}) => {

    const setContent = (view) => {
        switch (view) {
            case "Search":
                return <Search/>                
            case "Upload":
                return <AssetManager/>                
            case "Config":
                return<ConfigManager/>                      
            default:
                break;
        }    
    }

    return (<div className="content"> 
                <div className="dynamicContent">    
                    {setContent(view)}
                </div>
           </div>)
}

export default Content;