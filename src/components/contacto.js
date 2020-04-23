import React, { Component } from "react";
import { Button, Container, Segment, Icon, Header } from "semantic-ui-react";

export default class Contacto extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", nombre: "", mensaje: "" });

  render() {
    const { nombre, email, mensaje } = this.state;
    return (
      <Segment basic>
        <Header as="h2" icon textAlign="center">
          <Icon name="mail" circular />
          <Header.Content>Contacto</Header.Content>
        </Header>
        <Container center>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </Container>
      </Segment>
    );
  }
}
