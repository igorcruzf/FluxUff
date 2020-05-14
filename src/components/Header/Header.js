import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import ContentEditable from 'react-contenteditable'
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles({
    box: {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'center',
      width: '65%'
    }
  });*/


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { text: this.props.classProgram + ' - ' + this.props.workload }
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value });
    };

    render() {

        return <div>
            <Box border={1} display='flex' margin='0 auto' justifyContent='center' maxWidth='fit-content' minWidth='20%'>
                <div style={{ margin: '0 10px 0 10px' }}>
                    <ContentEditable
                        tagName='h1'
                        html={this.state.text} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={this.handleChange} // handle innerHTML 
                        onBlur={this.sanitize}
                    />
                </div>
            </Box>
        </div>
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