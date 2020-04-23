import React, { Component } from "react";
import { Card, Icon, Image, Header } from "semantic-ui-react";

export default class Cards extends Component {
  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="desktop" circular />
          <Header.Content>Servicios</Header.Content>
        </Header>
        <Card.Group stackable centered>
          <Card>
            <Image
              src="https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Apps Mobile</Card.Header>
              <Card.Description>
                Ionic es la opcion para desarrollar una aplicacion
                multiplataforma a bajo coste.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image
              src="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>React Apps</Card.Header>
              <Card.Description>
                Paginas web con toda la potencia del stack MERN.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image
              src="https://nubeser.com/wp-content/uploads/2014/03/desarrollo-web-html5-css3.jpg"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Paginas estaticas</Card.Header>
              <Card.Description>
                Solucion simple y economica para clientes que no requieren
                dinamismo en su pagina.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
