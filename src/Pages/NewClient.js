import React from "react";
import { Link } from "react-router-dom";
import { postClient, searchCep } from "../Services/client";
import {
  CpfMask,
  CepMask,
  ResidencialPhoneMask,
  CelphoneMask,
} from "../Components/Mask";

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewClient = () => {
  const [cpf, setCpf] = React.useState("");
  const [typeP, setTypeP] = React.useState(0);
  const [number, setNumber] = React.useState("");
  const [cep, setCep] = React.useState("");

  const sendData = (data) => {
    data.preventDefault();
    const headers = { Authorization: localStorage.getItem("token") };

    console.log(headers);

    let body = {
      name: data.target.elements.name.value,
      cpf: data.target.elements.cpf.value.replace(/\D+/g, ""),
      email1: data.target.elements.email1.value,
      typeNumber: data.target.elements.typeNumber.value,
      number: data.target.elements.number.value.replace("-", ""),
      cep: data.target.elements.cep.value.replace("-", ""),
      logradouro: data.target.elements.logradouro.value,
      bairro: data.target.elements.bairro.value,
      cidade: data.target.elements.cidade.value,
      uf: data.target.elements.uf.value,
      complemento: data.target.elements.complemento.value,
    };

    postClient(body, headers)
      .then((response) => {
        window.location.replace("/client");
        return response.status;
      })
      .catch((error) => {
        alert(
          error + "\n\nSua seção expirou, ou seu usuário não tem permissão"
        );
      });
  };

  const checkPhone = (e) => {
    console.log(e.target.value);
    setNumber("");
    setTypeP(e.target.value);
  };

  const maskNumbers = (e) => {
    if (typeP == 0) {
      console.log("tipo tel res " + typeP);
      setNumber(ResidencialPhoneMask(e.target.value));
    } else {
      console.log("tipo tel cel" + typeP);
      setNumber(CelphoneMask(e.target.value));
    }
  };

  const maskCpf = (e) => {
    setCpf(CpfMask(e.target.value));
  };

  const maskCep = (e) => {
    setCep(CepMask(e.target.value));
  };

  const CpfApi = (e) => {
    if (e.target.value !== "") {
      let localcep = e.target.value.replace("-", "");
      console.log(localcep);
      searchCep(localcep)
        .then((response) => {
          console.log(response.data);
          for (const i in response.data) {
            if (document.querySelector("#" + i)) {
              document.querySelector("#" + i).value = response.data[i];
            }
          }
        })
        .catch((e) => alert(e));
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Novo Cliente</h2>
      <Form onSubmit={sendData}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome:</Form.Label>
              <Form.Control required name="name" type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                required
                name="cpf"
                type="text"
                value={cpf}
                onChange={maskCpf}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control required name="email1" type="email" />
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Tipo de Número: </Form.Label>
              <Form.Control
                name="typeNumber"
                as="select"
                size="sm"
                custom
                onChange={checkPhone}
              >
                <option value={0}>Residencial</option>
                <option value={1}>Celular</option>
              </Form.Control>
            </Col>

            <Col>
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                required
                name="number"
                type="text"
                value={number}
                onChange={maskNumbers}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <h6 style={{ textAlign: "center" }}>Endereço:</h6>
          <Row>
            <Col>
              <Form.Label>CEP:</Form.Label>
              <Form.Control
                required
                name="cep"
                type="text"
                id="cep"
                value={cep}
                onChange={maskCep}
                onBlur={CpfApi}
              />
            </Col>
            <Col>
              <Form.Label>Cidade:</Form.Label>
              <Form.Control name="cidade" type="text" id="cidade" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Bairro:</Form.Label>
              <Form.Control required name="bairro" type="text" id="bairro" />
            </Col>
            <Col>
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control required name="logradouro" type="text" id="logradouro" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>UF:</Form.Label>
              <Form.Control required name="uf" type="text" id="uf" />
            </Col>
            <Col>
              <Form.Label>Complemento:</Form.Label>
              <Form.Control name="complemento" type="text" id="complemento" />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <Link to="/client">
        <Button style={{ marginTop: "2%" }} variant="warning">
          Voltar
        </Button>
      </Link>
    </Container>
  );
};

export default NewClient;
