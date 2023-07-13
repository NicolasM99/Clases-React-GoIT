import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const ACCEPT_OPTIONS = {
  YES: "yes",
  NO: "no",
};

class LoginForm extends Component {
  constructor(props) {
    const { NO } = ACCEPT_OPTIONS;
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.state = {
      username: "",
      password: "",
      newsAccept: NO,
      termsAccept: false,
      userCreated: false,
      dataSubmitted: null,
      age: "",
    };
  }

  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  usernameInputId = nanoid();
  passwordInputId = nanoid();
  //   newsAcceptInputYesId = nanoid()
  termsAcceptInputId = nanoid();

  handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form.elements);
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    console.log(username, password);
    this.props.onSubmit({ username, password });
    this.setState({
      ...this.state,
      username: "",
      password: "",
      termsAccept: false,
      dataSubmitted: {
        username: this.state.username,
        password: this.state.password,
      },
      userCreated: true,
    });
    form.reset();
  }

  handleChangeInputValue(evt) {
    const newValue =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    this.setState({
      ...this.state,
      [name]: newValue,
      userCreated: false,
      dataSubmitted: null,
    });
  }

  render() {
    const {
      username,
      password,
      userCreated,
      dataSubmitted,
      termsAccept,
      newsAccept,
      age,
    } = this.state;
    const buttonDisabled =
      !Boolean(password) || password.length < 6 || userCreated || !termsAccept;
    const passwordDisabled = !Boolean(username) || userCreated;
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
            justifyContent: "center",
            gap: "16px",
          }}
          onSubmit={this.handleSubmit}
        >
          <Input
            required
            onChange={this.handleChangeInputValue}
            placeholder="Username"
            type="text"
            name="username"
            label="Username"
            id={this.usernameInputId}
          />
          <Input
            required
            onChange={this.handleChangeInputValue}
            placeholder="Password"
            type="password"
            name="password"
            disabled={passwordDisabled}
            label="Password"
            id={this.passwordInputId}
          />
          <Input
            required
            onChange={this.handleChangeInputValue}
            type="radio"
            name="newsAccept"
            label="Yes"
            value={ACCEPT_OPTIONS.YES}
            checked={newsAccept === ACCEPT_OPTIONS.YES}
          />
          <Input
            required
            onChange={this.handleChangeInputValue}
            type="radio"
            name="newsAccept"
            label="No"
            value={ACCEPT_OPTIONS.NO}
            checked={newsAccept === ACCEPT_OPTIONS.NO}
          />
          <Input
            checked={termsAccept}
            required
            onChange={this.handleChangeInputValue}
            type="checkbox"
            name="termsAccept"
            label="Accept terms and conditions"
            id={this.termsAcceptInputId}
          />
          <label>
            Choose your age
            <select
              name="age"
              value={age}
              onChange={this.handleChangeInputValue}
            >
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>
          <Button variant="primary" disabled={buttonDisabled}>
            Login
          </Button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          {userCreated && <p>Successfully created the user:</p>}
          <p>Username: {username || dataSubmitted?.username}</p>
          <p>Password: {password || dataSubmitted?.password}</p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
