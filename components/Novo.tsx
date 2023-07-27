
'use client'
import { useState } from "react"
export default function Novo(){
    const [nome,setNome]= useState("");
    const [apelido,setApelido]= useState("");
    const [codigo,setCodigo]= useState("")

    return(
        <form>
             <label>
        Nome:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Apelido:
        <input type="text" value={apelido} onChange={(event) => setApelido(event.target.value)} />
      </label>
      <br />
     
      <br />
      <button type="submit">Criar Usuário</button>
        </form>
    )
}