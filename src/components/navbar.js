import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import Logo from "../img/Logo.png";

const scrollToRef = (ref) => {
  var navBarSize = 50;
  if (window.innerWidth < 768) {
    navBarSize = 170;
  }
  window.scrollTo(0, ref.current.offsetTop - navBarSize);
};

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name, myRefLink }) => {
    this.setState({ activeItem: name });
    scrollToRef(myRefLink);
  };

  sendMail = () => {
    window.open("mailto:josemonzon@nerthus.com.ar", "_blank");
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable fixed="top">
        <Container>
          <Menu.Item>
            <img alt="Logo nerthus" src={Logo} />
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
              onClick={this.sendMail}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
