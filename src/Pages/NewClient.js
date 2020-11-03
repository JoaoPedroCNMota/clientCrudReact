import React from "react";
import { postClient } from "../Services/client";

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewClient = () => {

  const sendData = (data) => {
    console.log(data);
    postClient(data)
      .then((response) => {
        window.location.href = "/client";
        return response.status;
      })
      .catch((error) => {
        alert(error);
      });
  };

  const[phones, setPhones] = React.useState([])

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Novo Cliente</h2>
      <Form onSubmit={sendData}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>CPF:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Emails:</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Telefones:</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group>
          <h6 style={{ textAlign: "center" }}>Endereço:</h6>
          <Row>
            <Col>
              <Form.Label>CEP:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
            <Col>
              <Form.Label>Cidade:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Bairro:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
            <Col>
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>UF:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
            <Col>
              <Form.Label>Complemento:</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default NewClient;
