import React from 'react';
import uuid from 'uuid/v4';
import _ from 'lodash';
import io from 'socket.io-client';
import Message from './Message.jsx';
import Input from './Input.jsx';
import VideoChat from './VideoChat.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {},
    };
    this.socket = io();
    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  componentDidMount() {
    this.socket.on('msg', (msg) => {
      this.addMessage(msg);
    });
  }

  addMessage(msg) {
    const id = uuid();
    this.state.messages[id] = msg;
    this.setState({
      messages: this.state.messages,
    });
  }

  removeMessage(id) {
    delete this.state.messages[id];
    this.setState({
      messages: this.state.messages,
    });
  }

  render() {
    return (
      <div>
        <Input socket={this.socket} />
        <VideoChat socket={this.socket} />
        {
          _.map(this.state.messages, (value, index) =>
            <Message key={index} value={value} id={index} removeMessage={this.removeMessage} />)
        }
      </div>
    );
  }
}
