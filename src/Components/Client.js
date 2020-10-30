import React from "react";
import "./style.css";

const Client = (props) =>(
    <div>
        <h3>{props.name}</h3>

        <div className="container" >
            <h4>CPF</h4>
            <p>{props.cpf}</p>

            <div>
                <h4>Telefones</h4>
                {props.phone.map((p) =>
                    <div>
                        <p>{p.number}</p>
                        <p>{p.typeNumber}</p> 
                    </div>
                )}
            </div>

            <div>
                <h4>Emails</h4>
                {props.email.map((e) =>
                    <p>{e}</p>
                )}
            </div>

            <div>
                <h4 style={{textAlign:"center"}}>Endereço</h4>
                {props.address.map((a) =>
                    <div>
                        <label>CEP:</label><p>{a.cep}</p>
                        <label>Logradouro:</label><p>{a.logradouro}</p>
                        <label>Bairro:</label><p>{a.bairro}</p>
                        <label>Cidade:</label><p>{a.cidade}</p>
                        <label>UF:</label><p>{a.uf}</p>
                        <label>Complemento:</label><p>{a.complemento}</p>
                    </div>
                )}
            </div>

        </div>
    </div>
);

export default Client;