import React from 'react';

import AssetManager from './../DynamicContent/AssetManager';
import ConfigManager from './../DynamicContent/ConfigManager';
import Search from './../DynamicContent/Search';

const Content = (props) => {
    return (<div className="content"> 
                <div className="dynamicContent">              
                    <AssetManager/>
                    <ConfigManager/>
                    <Search/>
                </div>
           </div>)
}

export default Content;