'use client'
import React, { SyntheticEvent } from 'react';

interface ClienteProps {
  nome: string;
  apelido: string;
  codigo: string;
}

export function Registar() {
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data = {
      nome: (event.target as HTMLFormElement).nome.value,
      apelido: (event.target as HTMLFormElement).apelido.value,
      codigo: (event.target as HTMLFormElement).codigo.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = 'http://localhost:3101/clienteNov';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">First Name</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="apelido">Last Name</label>
        <input type="text" id="apelido" name="apelido" required />

        <label htmlFor="codigo">Last Name</label>
        <input type="text" id="codigo" name="codigo" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}