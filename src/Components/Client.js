import React from "react";
import {
  CpfMask,
  CepMask,
  ResidencialPhoneMask,
  CelphoneMask,
} from "../Components/Mask";

import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Client = (props) => {
  const checkPhoneType = (phone, type) => {
    if (type === 1) {
      return "Celular: " + CelphoneMask(phone);
    } else {
      return "Residencial: " + ResidencialPhoneMask(phone);
    }
  };

  return (
    <Container style={{ backgroundColor: "lightgray" }}>
      <h3 style={{ color: "blue" }}>{props.name}</h3>

      <div>
        <Row>
          <Col>
            <Row>
              <h5>CPF: </h5>
              <p style={{ marginLeft: "1%" }}> {CpfMask(props.cpf)}</p>
            </Row>
          </Col>

          <Col>
            <h5>Telefones: </h5>

            {props.phone.map((p) => (
              <Row>
                <p>
                  {/* {p.number} / Tipo: {p.typeNumber} */}
                  {checkPhoneType(p.number, p.typeNumber)}
                </p>
              </Row>
            ))}
          </Col>

          <Col>
            <h5>Emails: </h5>
            {props.email.map((e) => (
              <p>{e}</p>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            <h5 style={{ textAlign: "center", marginTop: "3%" }}>Endereço</h5>
            {props.address.map((a) => (
              <Row style={{ margin: "1%", backgroundColor: "lightskyblue" }}>
                <Col>
                  <Row>
                    <h6>Bairro:</h6>
                    <p>{a.bairro}</p>
                  </Row>
                  <Row>
                    <h6>CEP:</h6>
                    <p>{CepMask(a.cep)}</p>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <h6>Logradouro: </h6>
                    <p>{a.logradouro}</p>
                  </Row>
                  <Row>
                    <h6>Complemento: </h6>
                    <p>{a.complemento}</p>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <h6>Cidade: </h6>
                    <p>{a.cidade}</p>
                  </Row>
                  <Row>
                    <h6>UF: </h6>
                    <p>{a.uf}</p>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Client;
