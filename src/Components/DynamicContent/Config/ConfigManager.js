import React from 'react';

const ConfigManager = (props) => {

    return(
        <div className="configBox">
        
        <form className="configForm">
            <label for="promotionname">Promotion Name:</label>
            <input name="promotionname" type="text"/>
            <br/>
            
            Mobile: <input type="checkbox" name="devices" value="Mobile"/><br/>      
            Desktop: <input type="checkbox" name="devices" value="Desktop"/><br/>      
            Tablet: <input type="checkbox" name="devices" value="Tablet"/><br/>      
            
            <br/>             
            <input className="configSubmitBtn" type="submit"/>
          </form>       
        
        </div>
    )
}

export default ConfigManager;