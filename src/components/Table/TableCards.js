import React, { Component } from 'react';
import ClassCard from '../ClassCard.js';


function onMouseEnterHandler(e) {
    var idColumn = e.target.className
    var column = document.getElementsByClassName(idColumn)
    if(column.length !== 0)
        for(var i = 0; i < column.length; i++){
            column[i].style.opacity = '1';
        }
}

function onMouseLeaveHandler(e) {
    var idColumn = e.target.className
    var column = document.getElementsByClassName(idColumn)
    if(column.length !== 0)
        for(var i = 0; i < column.length; i++){
            column[i].style.opacity = '0';
        }
}

class TableCards extends Component {

    constructor(props) {
        super(props);
        this.state = { sizeRow: 15, sizeCol: 15, style: {opacity:'0'}}
    }

    render() {
        let rows = [];
        let headCell = [];
        for (var j = 0; j < this.state.sizeCol; j++) {
            let theadID = `cell${j}`
            headCell.push(<th key={theadID} id={theadID}>{j+1}</th>)
        }
        rows.push(<tr>{headCell}</tr>)
        for (var i = 0; i < this.state.sizeRow; i++) {
            let rowID = `row${i}`
            let cell = []
            for (var idx = 0; idx < this.state.sizeCol; idx++) {
                let cellID = `cell${i}-${idx}`
                cell.push(<td className={idx} key={cellID} id={cellID} style={this.state.style} onMouseEnter = {onMouseEnterHandler} onMouseLeave = {onMouseLeaveHandler}><ClassCard id={cellID}/></td>)
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