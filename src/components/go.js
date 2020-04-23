import React, { Component } from "react";
import Auto from "../img/Auto.svg";
import {
  Segment,
  Container,
  Grid,
  Image,
  Header,
  Button,
} from "semantic-ui-react";

export default class Go extends Component {
  render() {
    return (
      <Segment style={{ margin: "0px" }} basic inverted secondary>
        <Container>
          <Grid stackable columns="equal" centered>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Image src={Auto} fluid />
              </Grid.Column>
              <Grid.Column>
                <Grid padded>
                  <Grid.Row>
                    <Grid.Column>
                      <Header inverted as="h2">
                        Nerthus Go
                        <Header.Subheader>
                          Solucion Open Source para que te pidas un remis. (en
                          desarrollo)
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button.Group>
                        <Button
                          disabled
                          positive
                          labelPosition="right"
                          icon="angle double right"
                          content="Probalo gratis"
                        />
                        <Button
                          disabled
                          labelPosition="right"
                          icon="server"
                          content="Implementalo"
                        />
                      </Button.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
