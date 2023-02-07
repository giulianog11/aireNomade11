import React from "react";
import {Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import seNomade from "../../assets/images/Se nomade.png";

const Home = () => {

    return (
      <Container style={{height: "50%"}}>
        <Row>
        <Col>
          <Image src={seNomade} className="form-img"></Image>
        </Col>
        <Col>
            <Form className="formulario">
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu Email" />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </Form.Group>
              </Col>
            </Row>
      
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Dirección</Form.Label>
              <Form.Control placeholder="1234 Calle Wallabie" />
            </Form.Group>
      
            <Row className="mb-3">
              <Col>
              <Form.Group controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
              </Col>
            </Row>
      
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
      
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        </Row>
      </Container>

    );
  }


export { Home };