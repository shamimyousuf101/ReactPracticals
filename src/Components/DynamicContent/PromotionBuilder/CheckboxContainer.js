import React from 'react';

import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(preState => ({ checkedItems: preState.checkedItems.set(item, isChecked) }))
    }


    handleFieldSetChange = (event) => {
        this.props.onFormChange( this.state.checkedItems, this.props.name)
    }

    render(){
        
        return (
            <fieldset onChange={this.handleFieldSetChange}>
            <legend>{this.props.legendText}</legend>
                    {
                        this.props.displayItems.map(item => (
                            <label key = {item.key}>
                                {item.name}
                                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />                           
                            </label>
                        ))
                    }
            </fieldset>

        )
    }
}

export default CheckboxContainer;