import React, { Component } from 'react';
import{ SteppedLineTo} from 'react-lineto';

class ClassArrow extends Component {
    constructor(props) {
        super(props);
        this.state = { arrowArray: []}
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
        this.setState({arrowArray: vetor});
    }

    render() {
        return (
            <div>
                {this.state.arrowArray}
            </div>
        );
    }
}

export default ClassArrow;