import React, { Component } from 'react';
import LineTo, { SteppedLineTo, Line } from "react-lineto";

class Teste extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            from: null,
            to: null,
        };
        this.state = this.initialState;
        this.clearLine = this.clearLine.bind(this);
        this.drawLine = this.drawLine.bind(this);
    }
    clearLine() {
        this.setState(this.initialState);
    }

    drawLine(from, to) {
        this.setState({ from, to });
    }

    render() {
        const { from, to } = this.state;
        const line = from && to ? (
            <LineTo
                from={from}
                to={to}
                fromAnchor="middle right"
                toAnchor="middle left"
                borderWidth={3}
            />
        ) : null;
        return (
            <fieldset id="hover-test">
                <legend>Hover Test</legend>

                Demonstrate how to draw a line from one component to another
                in response to a hover event.

                <div
                    className="hover-A"
                    top="80px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-A', 'hover-F')}
                    onMouseOut={this.clearLine}
                    >A</div>
                <div
                    className="hover-B"
                    top="140px"
                    left="20px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-B', 'hover-E')}
                    onMouseOut={this.clearLine}
                    >B</div>
                <div
                    className="hover-C"
                    top="200px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-C', 'hover-D')}
                    onMouseOut={this.clearLine}
                    >C</div>
                <div
                    className="hover-D"
                    top="80px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-D', 'hover-C')}
                    onMouseOut={this.clearLine}
                    >D</div>
                <div
                    className="hover-E"
                    top="140px"
                    left="300px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-E', 'hover-B')}
                    onMouseOut={this.clearLine}
                    >E</div>
                <div
                    className="hover-F"
                    top="200px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-F', 'hover-A')}
                    onMouseOut={this.clearLine}
                    >F</div>
                {line}
            </fieldset>
        );
    }
}

export default Teste;