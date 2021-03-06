import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledMessage = styled.div`
  animation: ${fadeOut} 1s;
  font-family: sans-serif;
  font-size: 5vw;
  position: absolute;
  width: 100px;
  left: ${props => props.w};
  top: ${props => props.h};
`;

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.removeSelf = this.removeSelf.bind(this);
    const w = ((window.innerWidth - (window.innerWidth * 0.3)) * Math.random()) + (window.innerWidth * 0.1);
    const h = ((window.innerHeight - (window.innerHeight * 0.3)) * Math.random()) + (window.innerHeight * 0.1);
    this.w = `${w}px`;
    this.h = `${h}px`;
  }

  componentDidMount() {
    setTimeout(this.removeSelf, 980);
  }

  removeSelf() {
    this.props.removeMessage(this.props.id);
  }

  render() {
    return (
      <StyledMessage h={this.h} w={this.w}>{this.props.value}</StyledMessage>
    );
  }
}
