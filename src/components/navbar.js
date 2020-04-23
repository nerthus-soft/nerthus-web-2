import React, { Component, useEffect, useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import Logo from "../img/Logo.png";

const scrollToRef = (ref) => {
  var resto = 50;
  if (window.innerWidth < 768) {
    resto = 170;
  }
  window.scrollTo(0, ref.current.offsetTop - resto);
};

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name, myRefLink }) => {
    this.setState({ activeItem: name });
    scrollToRef(myRefLink);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable fixed="top">
        <Container>
          <Menu.Item>
            <img src={Logo} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              position="right"
              name="Servicios"
              active={activeItem === "Servicios"}
              myRefLink={this.props.serviciosRef}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Productos"
              active={activeItem === "Productos"}
              myRefLink={this.props.productosRef}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Contacto"
              myRefLink={this.props.contactoRef}
              active={activeItem === "Contacto"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
