import React, { Component } from "react";
import {
  Container,
  Image,
  List,
  Segment,
  Modal,
  Header,
  Button,
  Icon,
  Grid,
} from "semantic-ui-react";

import Logo from "../img/Logo.png";

export default class Pie extends Component {
  render() {
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
      <Segment
        inverted
        vertical
        style={{ margin: "0em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Image centered size="mini" src={Logo} />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Mapa del sitio
            </List.Item>
            <Modal trigger={<List.Item as="a">Contacto</List.Item>} closeIcon>
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
            <List.Item as="a" onClick={toContact.toPortfolio}>
              Portfolio
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}
