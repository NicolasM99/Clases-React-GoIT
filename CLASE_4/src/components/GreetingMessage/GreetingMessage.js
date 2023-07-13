import React, { Component } from "react";
import Input from "../Input/Input";
import PropTypes from "prop-types";

class GreetingMessage extends Component {
  static defaultProps = {
    message: "Hi! ",
  };
  static propTypes = {
    message: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, username: event.target.value });
  }
  render() {
    const { message, username } = this.state;
    return (
      <div>
        <Input onChange={(event) => this.handleChange(event)} />
        <p>
          {message}
          {username}
        </p>
      </div>
    );
  }
}

export default GreetingMessage;
