import React, { Component } from "react";
import { Form, Container, Segment } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

export default class Contacto extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", nombre: "", mensaje: "" });

  render() {
    const { nombre, email, mensaje } = this.state;
    return (
      <Segment basic>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                placeholder="Name"
                name="nombre"
                value={nombre}
                onChange={this.handleChange}
              />
              <Form.Input
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea
              label="Mensaje"
              name="mensaje"
              value={mensaje}
              onChange={this.handleChange}
            />
            <Form.Button content="Submit">Submit</Form.Button>
          </Form>
        </Container>
      </Segment>
    );
  }
}
