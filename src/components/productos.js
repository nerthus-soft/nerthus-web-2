import React, { Component } from "react";
import Food from "./food";
import Go from "./go";
export default class Productos extends Component {
  render() {
    return (
      <div>
        <Food />
        <Go />
      </div>
    );
  }
}
