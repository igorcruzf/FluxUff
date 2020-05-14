import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ContentEditable from 'react-contenteditable';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class ClassCard extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Nome da matéria' }
  }

  handleChange = evt => {
    this.setState({ text: evt.target.value });
  };

  /*componentDidMount(){
      function editTitle(){
        var title = document.getElementById('txt');
        title.onmouseover = function(){
          this.title = 'Matéria';;
        }
        title.onmouseout = function(){
          this.title = 'Matéria';
        }
        title.onclick = function(){
          var textoAtual = 'Nome da matéria';
          var input = '<input type="text" name="1" value="'+textoAtual+'">';
          this.innerHTML = input;
          var field = this.firstChild;
          this.onclick = 'Matéria';
          this.onmouseover = 'Matéria';
          field.focus();
          field.select();
          field.onblur = function(){
            if(this.value !== '') this.parentNode.innerHTML = this.value;
            else this.parentNode.innerHTML = 'Nome da matéria';
            editTitle();
          }
        }
      }
      editTitle();
  }*/

  /*<Typography id='txt' variant="h5" component="h2" contentEditable="true">
    Nome da matéria
  </Typography>*/

  render() {

    return <Card >
      <CardContent>
        <div >
          <ContentEditable
            width='500px'
            tagName='h5'
            html={this.state.text} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML 
            onBlur={this.sanitize}
          />
        </div>
      </CardContent>
    </Card>;
  }
}

export default ClassCard;