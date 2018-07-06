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
  position: absolute;
  width: 50px;
  left: ${props => props.w};
  top: ${props => props.h};
`;

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.removeSelf = this.removeSelf.bind(this);
    const w = window.innerWidth * Math.random();
    const h = window.innerHeight * Math.random();
    this.w = `${w}px`;
    this.h = `${h}px`;
  }

  componentDidMount() {
    setTimeout(this.removeSelf, 1000);
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
