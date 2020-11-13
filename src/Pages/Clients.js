import React from "react";
import Client from "../Components/Client";
import { getClients } from "../Services/client";
import {logOut} from '../Services/login';
import { Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

const Clients = () => {
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    getClients()
      .then((resp) => setClients(resp.data))
      .catch((err) => console.log("erro:" + err));
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Clientes</h2>
      <Container style={{ marginTop: "2%" }}>
        <Link to="/newclient">
          <Button variant="primary">Cadastrar Novo Cliente</Button>
        </Link>

        <Link to="/delete" style={{marginLeft: "5%"}}>
          <Button variant="warning">Excluir Cliente</Button>
        </Link>

        <Link to="/" onClick={() => logOut()} style={{marginLeft: "5%"}}>
          <Button variant="danger">Log-out</Button>
        </Link>
      </Container>
      <div>
        {clients.map((c) => (
          <div key={c.id}>
            <Client
              name={c.name}
              cpf={c.cpf}
              phone={c.phone}
              email={c.email}
              address={c.address}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Clients;
