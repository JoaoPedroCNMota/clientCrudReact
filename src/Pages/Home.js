import React from "react";
import { useForm } from 'react-hook-form';
import { loginForm } from "../Services/login";

import { Container, Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    const token = loginForm(data)
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        alert(error);
      })
    localStorage.setItem('token', token);
  }

  return (
    <Container style={{marginTop: "10%"}}>
      <h2 style={{textAlign: "center"}}>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col></Col>
          <label>Email</label>
          <input ref={register({ required: true })} name="login" type="text"></input>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <label>Senha</label>
          <input ref={register({ required: true })} name="pass" type="password"></input>
          <Col></Col>
        </Row>

        <div>
          {errors.password && "*Senha inválida"}
          {errors.email && "*Email obrigatório"}
        </div>
        
        <button style={{marginLeft: "50%"}}>Login</button>
      </form>
    </Container>
  );
};

export default Home;
