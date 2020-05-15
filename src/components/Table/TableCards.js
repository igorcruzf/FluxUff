import React, { Component } from 'react';
import ClassCard from '../ClassCard.js';

class TableCards extends Component {

    constructor(props) {
        super(props);
        this.state = { sizeRow: 15, sizeCol: 15}
    }

    render() {
        let rows = [];
        for (var i = 0; i < this.state.sizeRow; i++) {
            let rowID = `row${i}`
            let cell = []
            for (var idx = 0; idx < this.state.sizeCol; idx++) {
                let cellID = `cell${i}-${idx}`
                cell.push(<td key={cellID} id={cellID}><ClassCard /></td>)
            }
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return (
            <table id="table-of-cards" cellPadding='30%'>
                <tbody>
                    {rows}
                </tbody>
            </table>)
    }

}

export default TableCards;