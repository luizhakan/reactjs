import React, { useState, useEffect } from "react";
import './HooksApi.css'

export default function HooksEffectApi() {
  // state
  const [users, setUsers] = useState([]);

  // effect
  useEffect(() => {
    fetch("https://dummyjson.com/users").then((response) => {
      response.json().then((data) => {
        console.log(data.users);
        setUsers(data.users);
      });
    });
  }, []);

  return (
    <div style={{textAlign: "center"}}>
      <div className="titulos">
      <h1 style={{ textAlign: "center" }}>Hooks - useEffect - API</h1>
      <p>Usuários inscritos</p>
      </div>

      <hr />
      {users.map((usuarios) => {
        return (
          <div key={usuarios.id} className="container">
            <div className="row">
              <div className="col">
                <ul className="card" style={{width: "18rem"}}>
                  <li>
                    <img className="card-img-top" src={usuarios.image} />
                  </li>
                  <li className="card-title">
                    {usuarios.firstName} {usuarios.lastName}
                  </li>
                  <li className="card-text">{usuarios.gender.toUpperCase()}</li>
                  <li className="card-text">
                    {usuarios.address.address}, {usuarios.address.postalCode},{" "}
                    {usuarios.address.city}-{usuarios.address.state}{" "}
                  </li>
                  <li className="card-text">{usuarios.phone}</li>
                  <li className="card-text">{usuarios.email}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
