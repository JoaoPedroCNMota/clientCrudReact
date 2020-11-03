import React from "react";
import Client from "../Components/Client";
import { getClients } from "../Services/client";


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
      <div>
        {clients.map((c) => (
          <>
            <Client
              name={c.name}
              cpf={c.cpf}
              phone={c.phone}
              email={c.email}
              address={c.address}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Clients;
