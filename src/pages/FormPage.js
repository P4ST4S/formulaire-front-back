import React, { useState } from "react";
import axios from "axios";
import "./FormPage.css";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [object, setObject] = useState("");
  const [where, setWhere] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      telephone,
      object,
      where,
    };

    axios
      .post("http://localhost:5000/formulaire", data)
      .then((res) => {
        console.log(res);
        alert("Votre demande a bien été envoyée");
        setEmail("");
        setName("");
        setTelephone("");
        setObject("");
        setWhere("");
      })
      .catch((err) => {
        console.log(err);
        alert("Une erreur est survenue");
      });
  };

  return (
    <div className="FormPage">
      <h1>Formulaire de contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom* :
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email* :
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Téléphone :
          <input
            type="tel"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
        <br />
        <label>
          Objet de la demande* :
          <input
            type="text"
            value={object}
            onChange={(event) => setObject(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Ma ville* :
          <input
            type="text"
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormPage;
