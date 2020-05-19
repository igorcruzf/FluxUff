import React from 'react';
import ClassCard from '../ClassCard.js';

function TableCards(props) {
    const rows = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    const columns = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    function onClickHandler(cellID) {
        let vetor = [...(props.idsArray), cellID];
        props.setIds(vetor)
    }


    return (
        <table id="table-of-cards" cellPadding='30%'>
            <thead>
                {columns.map((i) => <th id={`cell${i}`}>{i + 1}</th>)}
            </thead>
            <tbody>
                {rows.map((i) =>
                    <tr key={i} id={`row${i}`}>
                        {columns.map((j) =>
                            <td className={`cell${i}-${j}`} key={`cell${i}-${j}`} id={`cell${i}-${j}`} onClick={() => onClickHandler(`cell${i}-${j}`)}>
                                <ClassCard id={`cell${i}-${j}`} />
                            </td>)}
                    </tr>)}
            </tbody>
        </table>)
}

export default TableCards;