import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ContentEditable from 'react-contenteditable';
import IconButton from '@material-ui/core/IconButton';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
var cardStyle = {
  display: 'block',
  width: '100px',
  transitionDuration: '0.3s',
  height: '60px',
  backgroundColor: '#D3D3D3',
  verticalAlign: 'middle'
}

class ClassCard extends Component {
  constructor(props) {
    super(props)
    this.id = props.id
    this.state = { 
      text: 'Nome da matéria',
    }
  }

  handleChange = evt => {
    this.setState({ text: evt.target.value });
  };

  able = () => {
    document.getElementById(this.id + 'b').style.display = 'none';
    document.getElementById(this.id + 'c').style.display = 'block';
  };

  render() {

    return <Card style={cardStyle}>
        <IconButton id={this.id + 'b'} onClick={this.able} style={{display: 'block', margin: '0 auto', }}>
          <FontAwesomeIcon icon={faPlusCircle}/>
        </IconButton>
        <ContentEditable
          id={this.id + 'c'}
          style={{display: 'none'}}
          tagName='h5'
          html={this.state.text} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML 
          onBlur={this.sanitize}
        />
    </Card>;
  }
}

export default ClassCard;