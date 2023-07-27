import React, { Component } from "react";
import Patient from "../Patient/Patient";
import Button from "../Button/Button";
import { nanoid } from "nanoid";

export default class PatientsForm extends Component {
  constructor(props) {
    super(props);
    this.handleAddPatient = this.handleAddPatient.bind(this);
    this.handleDeletePatient = this.handleDeletePatient.bind(this);
    this.state = {
      patients: [],
    };
  }

  handleAddPatient() {
    this.setState({
      patients: [
        ...this.state.patients,
        { id: nanoid(), index: this.state.patients.length + 1 },
      ],
    });
  }

  handleDeletePatient(id) {
    this.setState({
      patients: this.state.patients.filter((patient) => patient.id !== id),
    });
  }

  render() {
    const { patients } = this.state;
    return (
      <div>
        <Button onClick={this.handleAddPatient} variant="primary">
          + Agregar
        </Button>
        {patients.map((patient) => (
          <Patient
            key={patient.id}
            onDeletePatient={this.handleDeletePatient}
            id={patient.id}
            index={patient.index}
            editableProp={true}
          />
        ))}
      </div>
    );
  }
}
