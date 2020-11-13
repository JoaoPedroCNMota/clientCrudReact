import React from "react";
import {Link} from "react-router-dom";
import { getClients, deleteClient } from "../Services/client";

import { Container, ListGroup, Button } from "react-bootstrap";

const Delete = () => {
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    getClients()
      .then((resp) => setClients(resp.data))
      .catch((err) => console.log("erro:" + err));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const headers = { Authorization: localStorage.getItem("token") };
    deleteClient(id, headers)
      .then((resp) => setClients(clients.filter((client) => client.id !== id)))
      .catch((err) => alert(err + "\n\nSua seção expirou, ou seu usuário não tem permissão"));
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Excluir Clientes</h2>
      <ListGroup>
        {clients.map((c) => (
          <ListGroup.Item key={c.id}>
            {c.name}
            <Button
              style={{ marginLeft: "10%" }}
              variant="danger"
              onClick={() => handleDelete(c.id)}
            >
              Excluir
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Link to="/client">
        <Button style={{ marginTop: "2%"}} variant="warning">Voltar</Button>
      </Link>
    </Container>
  );
};

export default Delete;
