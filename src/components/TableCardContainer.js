import React, { Component } from 'react';
import TableCards from './Table/TableCards';
import ClassArrow from '../components/ClassArrow'

class TableCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { idsArray: [] };
    }

    render() {
        return (
            <div>
                <ClassArrow setIds={() => this.setState.bind(this, this.state.idsArray)} idsArray={this.state.idsArray}/>
                <TableCards setIds={() => this.setState.bind(this, this.state.idsArray)} idsArray={this.state.idsArray}/>
            </div>
        );
    }
}
export default TableCardContainer;