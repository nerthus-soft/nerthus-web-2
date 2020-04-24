import React, { Component } from "react";
import {
  Container,
  Modal,
  Header,
  Button,
  Icon,
  Grid,
  Menu,
} from "semantic-ui-react";
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
    const toContact = {
      sendMail: function () {
        window.open("mailto:josemonzon@nerthus.com.ar", "_blank");
      },
      toInstagram: function () {
        window.open("https://www.instagram.com/nerthus.soft/", "_blank");
      },
      toLinkedIn: function () {
        window.open("https://www.linkedin.com/", "_blank");
      },
      toPortfolio: function () {
        window.open("https://www.behance.net/joseimonzon", "_blank");
      },
    };
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
            <Modal
              trigger={
                <Menu.Item
                  name="Contacto"
                  myRefLink={this.props.contactoRef}
                  active={activeItem === "Contacto"}
                />
              }
              closeIcon
            >
              <Header icon="address card" content="Contacto" />
              <Modal.Content>
                <Header as="h4" icon textAlign="center">
                  <Header.Content>
                    Podes encontrarnos a traves de cualquiera de estas redes.
                  </Header.Content>
                </Header>
                <Grid>
                  <Grid.Column textAlign="center">
                    <Button onClick={toContact.toLinkedIn} color="linkedin">
                      <Icon name="linkedin" /> LinkedIn
                    </Button>
                    <Button onClick={toContact.toInstagram} color="instagram">
                      <Icon name="instagram" /> Instagram
                    </Button>
                    <Button onClick={toContact.sendMail} color="email">
                      <Icon name="mail" /> Email
                    </Button>
                  </Grid.Column>
                </Grid>
              </Modal.Content>
            </Modal>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
