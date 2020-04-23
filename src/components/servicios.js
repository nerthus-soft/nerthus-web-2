import React, { Component } from "react";
import Cards from "./cards";
import { Container } from "semantic-ui-react";
import { Responsive } from "semantic-ui-react";

export default class Servicios extends Component {
  render() {
    return (
      <div>
        <Responsive
          as={Container}
          style={{ paddingTop: "7em" }}
          icon="mobile"
          labelPosition="left"
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Cards />
        </Responsive>
        <Responsive
          {...Responsive.onlyMobile}
          as={Container}
          style={{ paddingTop: "16em" }}
          icon="mobile"
          labelPosition="left"
        >
          <Cards />
        </Responsive>
      </div>
    );
  }
}
