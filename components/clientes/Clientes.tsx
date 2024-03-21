'use client'
import React, { useState } from 'react';
import Tabela from '../Tabela';
import Link from 'next/link';

export default function Clientes({responseC}:any){
    const [data, setData] = React.useState([]);
   
    // Use useEffect para atualizar o estado "data" sempre que "responseC" mudar
    React.useEffect(() => {
      setData(responseC);
    }, [responseC]);
  
    const handleButtonActived = () => {
      setData(responseC.filter((cliente:any) => cliente.estado === "Activo"));
    };
  
    const handleButtonDesatived = () => {
      setData(responseC.filter((cliente: any) => cliente.estado !== "Activo"));
    };
  
    const handleButtonMore3  = () => {
      const clientesFiltrados:any = responseC.filter((cliente: any) => {
        // Filtra clientes com estado "Activo"
        if (cliente.estado !== "Activo") {
            return false;
        }
    
        // Verifica se o cliente tem três ou mais faturas com estado "Nao pago"
        const faturasNaoPagas = cliente.faturas.filter((fatura: any) => fatura.estado === "Nao pago");
        return faturasNaoPagas.length >= 3;
    })
    setData(clientesFiltrados)
    };

    const ativos = responseC.filter((cliente:any) => cliente.estado === "Activo").length
    const desativado = responseC.filter((cliente:any) => cliente.estado !== "Activo").length

    const clientesFiltrados:any = responseC.filter((cliente: any) => {
      // Filtra clientes com estado "Activo"
      if (cliente.estado !== "Activo") {
          return false;
      }
  
      // Verifica se o cliente tem três ou mais faturas com estado "Nao pago"
      const faturasNaoPagas = cliente.faturas.filter((fatura: any) => fatura.estado === "Nao pago");
      return faturasNaoPagas.length >= 3;
  })

  const comMaisDe3 = clientesFiltrados.length

    return(
        <div className="z-20">          
       <section className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2"> {ativos} </h2>
                    <p>Ativos</p>
                    <button onClick={ handleButtonActived} className="btn btn-sm mt-2">Ver</button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">{comMaisDe3}</h2>
                    <p> 3 Faturas</p>
                    <button onClick={ handleButtonMore3 } className="btn btn-sm mt-2">Ver</button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">{desativado}</h2>
                    <p>Desativado</p>
                    <button onClick={ handleButtonDesatived} className="btn btn-sm mt-2 z-10">Ver</button>
                    </div>
                </div>
               </ section >

               <div className=" mt-5 p-5 shadow-md ">
                  {/* <Tabela dados={data}/> */}
                  <div className="overflow-x-auto h-96">
        <table className="table  table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className='bg-gray-100'>             
              <td>Nome</td> 
              <td>Codigo</td> 
              <td>Contato</td> 
              <td>N Paga</td> 
              <td>Divida</td> 
              <td>Favorite Color</td>
              {/* <th></th>  */}
            </tr>
          </thead> 
          <tbody>
          {data.map((client:any)=>(
            <tr className='hover:bg-gray-100' key={client._id}>             
              <td>{client.nome} {client.apelido}</td> 
              <td>{client.codigo}</td> 
              <td>{client.contato}</td> 
              <td>{client.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length}</td> 
              <td>12/16/2020</td> 
              <td><Link href={`/clientes/${client._id}`}>{client.estado}</Link></td>
              
           
            </tr>
            ))}
            {/* <tr>
               
              <td>Hart Hagerty</td> 
              <td>Desktop Support Technician</td> 
              <td>Zemlak, Daniel and Leannon</td> 
              <td>United States</td> 
              <td>12/5/2020</td> 
              <td>Purple</td>
              <th></th>
            </tr> */}
            {/* <tr>              
              <td>Brice Swyre</td> 
              <td>Tax Accountant</td> 
              <td>Carroll Group</td> 
              <td>China</td> 
              <td>8/15/2020</td> 
              <td>Red</td>
              <th></th> 
            </tr> */}
           
          </tbody> 
          {/* <tfoot>
            <tr>
              <th></th> 
              <td>Name</td> 
              <td>Job</td> 
              <td>company</td> 
              <td>location</td> 
              <td>Last Login</td> 
              <th></th> 
            </tr>
          </tfoot> */}
        </table>
      </div>
                </div>
      </div>
    )
}




    
 