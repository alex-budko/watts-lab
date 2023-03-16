import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  background-color: ${(props) => props.buttonColor ? props.buttonColor : "blue"};
  color: white;
  padding: 10px 20px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: 'click me'
    };
  }

  handleButtonClick = () => {
    const newLabel = this.state.buttonLabel === 'click me' ? 'thanks' : 'click me';
    this.setState({ buttonLabel: newLabel });
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <StyledButton buttonColor={this.props.buttonColor} onClick={this.handleButtonClick}>
          {this.state.buttonLabel}
        </StyledButton>
      </div>
    );
  }
}
