import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitEnter = this.handleSubmitEnter.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit() {
    this.props.socket.emit('msg', this.state.inputText);
    this.setState({
      inputText: '',
    });
  }

  handleSubmitEnter(event) {
    if (event.key === 'Enter') {
      this.props.socket.emit('msg', this.state.inputText);
      this.setState({
        inputText: '',
      });
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter Message Here..."
          value={this.state.inputText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleSubmitEnter}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
