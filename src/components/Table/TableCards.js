import React, { Component } from 'react';
import ClassCard from '../ClassCard.js';

class TableCards extends Component {

    render() {
        return (
            <table>
                <tr>
                    <td style={{paddingRight: '5%'}}><ClassCard/></td>
                    <td><ClassCard/></td>
                    <td><ClassCard/></td>
                </tr>
                <tr>
                    <td><ClassCard/></td>
                    <td><ClassCard/></td>
                    <td><ClassCard/></td>
                </tr>
                <tr>
                    <td><ClassCard/></td>
                    <td><ClassCard/></td>
                    <td><ClassCard/></td>
                </tr>
            </table>)
    }

}

export default TableCards;