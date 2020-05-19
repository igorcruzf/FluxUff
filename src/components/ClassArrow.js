import React, { Component } from 'react';
import { SteppedLineTo } from 'react-lineto';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@material-ui/core/IconButton';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class ClassArrow extends Component {
    constructor(props) {
        super(props);
        this.state = { arrowArray: [], idsArray: [] }
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
    }

    getId(){
        let flag = true;
        while(flag){
            if(this.state.idsArray.lenght() < 2){
                flag = true;
            }else{
                this.createArrow(this.state.idsArray[0], this.state.idsArray[1]);
                this.setState({idsArray: []});
                flag = false;
            }
        }
    }

    render() {
        return (
            <div>
                <IconButton size='small' onClick={this.getId} style={
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