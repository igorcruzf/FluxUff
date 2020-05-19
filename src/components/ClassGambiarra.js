import React, {Component} from 'react';
import ClassArrow from './ClassArrow';
import TableCards from './Table/TableCards';

class ClassGambiarra extends Component{
    constructor(props){
        super(props);
        this.state = {idsArray: []};
    }

    render () {
        return(
            <div>
                <ClassArrow ids={this.state.idsArray.bind(this)}/>
                <TableCards setIds = {this.setState(idsArray).bind(this)}/>
            </div>
        );
    }
}
export default ClassGambiarra;