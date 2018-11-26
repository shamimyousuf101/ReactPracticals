import React from 'react';

const ConfigManager = (props) => {

    // TODO - Would break this component down into smaller components

    return(
        <div className="config__box">
        
        <form className="config__form">
            <label htmlFor="promotionname">Promotion Name:</label>
            <input name="promotionname" type="text"/>
            <br/>
            
            Mobile: <input type="checkbox" name="devices" value="Mobile"/><br/>      
            Desktop: <input type="checkbox" name="devices" value="Desktop"/><br/>      
            Tablet: <input type="checkbox" name="devices" value="Tablet"/><br/>      
            
            <br/>             
            <input className="config__submitbutton" type="submit"/>
          </form>       
        
        </div>
    )
}

export default ConfigManager;