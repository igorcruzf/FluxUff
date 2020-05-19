import React, { Component } from 'react';
import { SteppedLineTo } from 'react-lineto';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@material-ui/core/IconButton';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class ClassArrow extends Component {
    constructor(props) {
        super(props);
        this.state = { arrowArray: [], setIds: props.setIds, idsArray: props.idsArray}
    }

    createArrow = (a, b) => {
        let vetor = this.state.arrowArray;
        vetor.push(<div id={a + b}><SteppedLineTo from={a} to={b}
            fromAnchor="right" toAnchor="left" style={{
                delay: true,
                borderColor: '#ddd',
                borderStyle: 'solid',
                borderWidth: 3
            }} /></div>)
        this.setState({ arrowArray: vetor });
        console.log(vetor)
    }

    getId() {
        let vetor = this.state.idsArray
        console.log(vetor)
        if (vetor.length >= 2) {
            console.log("entrou")
            this.createArrow(vetor[0], vetor[1]);
            this.state.setIds({ idsArray: vetor });
        }
    }

    render() {
        return (
            <div>
                <IconButton size='small' onClick={this.getId.bind(this)} style={
                    {
                        position: 'relative',
                        float: 'left'
                    }} >
                    <FontAwesomeIcon icon={faArrowRight} />
                </IconButton>
                {this.state.arrowArray}
            </div>
        );
    }
}

export default ClassArrow;