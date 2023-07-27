import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { nanoid } from "nanoid";

export class Patient extends Component {
  static propTypes = {
    editableProp: PropTypes.bool,
    id: PropTypes.string,
    index: PropTypes.number,
    onDeletePatient: PropTypes.func,
  };

  static defaultProps = {
    editableProp: false,
    id: "",
    index: 1,
    onDeletePatient: () => {},
  };

  constructor(props) {
    super(props);
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      data: {
        id: props.id,
        name: "",
        age: "",
      },
      index: props.index,
      editable: props.editableProp,
    };
  }

  handleChangeInputValue(evt) {
    const newValue = evt.target.value;
    const name = evt.target.name;
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [name]: newValue,
      },
    });
  }

  handleEdit() {
    this.setState({ ...this.state, editable: !this.state.editable });
  }

  nameInputId = nanoid();
  ageInputId = nanoid();

  render() {
    const {
      data: { id, name, age },
      index,
      editable,
    } = this.state;
    const { onDeletePatient } = this.props;
    return (
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Header variant={"h5"}>Paciente {index}</Header>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={this.handleEdit}>Editar</Button>
            <Button onClick={() => onDeletePatient(id)} variant="secondary">
              Borrar
            </Button>
          </div>
        </div>
        <small>ID: {id}</small>

        <Input
          onChange={this.handleChangeInputValue}
          label="Nombre"
          name="name"
          value={name}
          id={this.nameInputId}
          readOnly={!editable}
        />
        <Input
          onChange={this.handleChangeInputValue}
          name="age"
          label="Edad"
          value={age}
          id={this.ageInputId}
          readOnly={!editable}
        />
      </div>
    );
  }
}

export default Patient;
