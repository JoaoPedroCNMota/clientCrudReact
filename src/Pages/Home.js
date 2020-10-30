import React from "react";
import { useForm } from 'react-hook-form';
import { loginForm } from "../Services/login";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Email</label>
        <input ref={register({ required: true })} name="login" type="text"></input>
        
        <label>Senha</label>
        <input ref={register({ required: true })} name="pass" type="password"></input>

        <div>
          {errors.password && "*Senha inválida"}
          {errors.email && "*Email obrigatório"}
        </div>

        <button>Login</button>
      </form>
    </>
  );
};

export default Home;
