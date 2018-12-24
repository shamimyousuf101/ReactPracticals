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

    componentDidUpdate(prevProps){
        if(this.props.promotionData !== prevProps.promotionData) {
            this.setState({
                checkedItems:this.arrayToMap(this.props.promotionData)
            });
        }
    }


    componentDidMount(){
        this.setState({
            checkedItems:this.arrayToMap(this.props.promotionData)
        });
    }


    arrayToMap(array){
        let newMap = new Map();

        if(array){
            array.forEach(element => {
                newMap.set(element, true);
            });
        }

       return newMap;
    }
    

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(preState => ({ checkedItems: preState.checkedItems.set(item, isChecked) }))
    }

    render(){

        console.log("render");
        
        return (
            <React.Fragment>
                {
                    this.props.displayItems.map(item => (
                        <label key = {item.key}>
                            {item.name}
                            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />                           
                        </label>
                    ))
                }
            </React.Fragment>

        )
    }
}

export default CheckboxContainer;