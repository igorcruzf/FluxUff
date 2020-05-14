import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ContentEditable from 'react-contenteditable';
 
var cardStyle = {
  display: 'block',
  width: '200px',
  transitionDuration: '0.3s',
  height: '90px'
}
class ClassCard extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Nome da matéria' }
  }

  handleChange = evt => {
    this.setState({ text: evt.target.value });
  };

  render() {

    return <Card style={cardStyle}>
      <CardContent>
        <ContentEditable
          tagName='h5'
          html={this.state.text} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML 
          onBlur={this.sanitize}
        />
      </CardContent>
    </Card>;
  }
}

export default ClassCard;