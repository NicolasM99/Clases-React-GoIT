import React, { Component } from "react";
import ButtonClass from "../ButtonClass/ButtonClass";
import PropTypes from "prop-types";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubstract = this.handleSubstract.bind(this);
  }

  handleAdd(event) {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({ value: value + step });
    console.log(event);
  }

  handleSubstract() {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({ value: value - step });
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <ButtonClass onClick={(event) => this.handleAdd(event)} elevated>
          Aumentar valor
        </ButtonClass>
        <ButtonClass
          onClick={() => this.handleSubstract()}
          elevated
          variant={"secondary"}
        >
          Disminuir valor
        </ButtonClass>
        <h1>{value}</h1>
      </>
    );
  }
}

export default Counter;
