import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        return <Box display="flex" margin="0 auto" justifyContent="center" width='65%' border={1}>
            <h1 contentEditable="true">{this.state.classProgram + '-' + this.state.workload}</h1>

        </Box>
    }

    /* componentDidMount() {
        
        function editTitle() {

            var title = document.getElementsByTagName('h1')[0];
            var span = title.firstChild;

            span.onMouseOver = function () {
                this.title = 'Clique para editar o texto';
                this.style.background = '#f5f5f5';
                console.log("to funcionando");
            }
            span.onMouseOut = function () {
                this.title = '';
                this.style.background = '';
            }
            span.onClick = function () {
                var textoAtual = this.firstChild.nodeValue;
                var input = '<input type="text" name="1" value="' + textoAtual + '">';
                this.innerHTML = input;
                var field = this.firstChild;
                this.onClick = null;
                this.onMouseOver = null;
                field.focus();
                field.select();
                field.onblur = function () {
                    this.parentNode.innerHTML = this.value;
                    editTitle();
                }
            }
        }
        editTitle();
    } */
}



export default Header;