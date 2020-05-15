import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import ContentEditable from 'react-contenteditable';
import IconButton from '@material-ui/core/IconButton';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ClassCard extends Component {
  constructor(props) {
    super(props)
    this.id = props.id
    this.state = {
      text: 'Matéria',
      color: '#D3D3D3'
    }
  }

  handleChange = evt => {
    this.setState({ text: evt.target.value });
  };

  able = () => {
    document.getElementById(this.id + 'button-plus').style.display = 'none';
    document.getElementById(this.id + 'button-minus').style.display = 'block';
    document.getElementById(this.id + 'content').style.display = 'block';
    this.setState({color: '#F8F8FF'});
  };

  disable = () => {
    document.getElementById(this.id + 'button-plus').style.display = 'block';
    document.getElementById(this.id + 'button-minus').style.display = 'none';
    document.getElementById(this.id + 'content').style.display = 'none';
    this.setState({text: 'Matéria', color: '#D3D3D3'});
  };

  render() {

    return <Card style={{
      display: 'block',
      width: '100px',
      transitionDuration: '0.3s',
      height: '60px',
      backgroundColor: this.state.color,
      }}
      id={this.id + 'card'}
      >
      <IconButton
        id={this.id + 'button-plus'}
        onClick={this.able}
        style={{
          display: 'block',
          margin: '0 auto',
          marginTop: '6%'
        }}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </IconButton>
      <IconButton
        id={this.id + 'button-minus'}
        onClick={this.disable}
        style={{
          display: 'none',
          position: 'absolute',
        }}
        size='small'>
        <FontAwesomeIcon icon={faMinusCircle}/>
      </IconButton>
      <ContentEditable
        id={this.id + 'content'}
        style={{
          display: 'none',
          marginTop: '20%',
          textAlign: 'center',
          fontFamily: 'Arial',
          fontSize: '12px',
          fontWeight: 'normal'
        }}
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