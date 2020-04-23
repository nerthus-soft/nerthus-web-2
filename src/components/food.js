import React, { Component } from "react";
import Moto from "../img/Moto.svg";
import {
  Segment,
  Container,
  Grid,
  Image,
  Header,
  Button,
} from "semantic-ui-react";

export default class Food extends Component {
  render() {
    return (
      <Segment
        style={{ marginBottom: "0px", marginTop: "25px" }}
        basic
        inverted
        color="red"
        secondary
      >
        <Container>
          <Grid stackable columns="equal" centered>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Grid padded>
                  <Grid.Row>
                    <Grid.Column>
                      <Header inverted color="white" as="h2">
                        Nerthus Food
                        <Header.Subheader>
                          Solucion Open Source para que te claves unas
                          empanaditas.
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button
                        content="Implementalo"
                        icon="right arrow"
                        labelPosition="right"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Image src={Moto} fluid />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
