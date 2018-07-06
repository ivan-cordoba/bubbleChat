import React from 'react';
import uuid from 'uuid/v4';
import _ from 'lodash';
import Message from './Message.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {},
    };
    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
    setInterval(this.addMessage, 100);
  }

  addMessage() {
    const id = uuid();
    this.state.messages[id] = id;
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
        {
          _.map(this.state.messages, (value, index) =>
            <Message key={index} value={value} id={index} removeMessage={this.removeMessage} />)
        }
      </div>
    );
  }
}
