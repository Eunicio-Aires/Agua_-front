'use client'
import React, { useState } from 'react';
import Tabela from '../Tabela';

export default function Clientes({responseC}:any){
    const [data, setData] = React.useState(responseC);
   
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
  
    const handleButtonMore3 = () => {
      // Aqui você pode fazer algo diferente, se necessário
    };



    return(
        <div className="">          
       <section className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2"> 1235 </h2>
                    <p>Conteúdo do Card 1...</p>
                    <button onClick={ handleButtonActived} className="btn btn-sm mt-2">Ver</button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">Card 2</h2>
                    <p>Conteúdo do Card 2...</p>
                    <button onClick={ handleButtonMore3 } className="btn btn-sm mt-2">Ver</button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">Card 3</h2>
                    <p>Conteúdo do Card 3...</p>
                    <button onClick={ handleButtonDesatived} className="btn btn-sm mt-2">Ver</button>
                    </div>
                </div>
               </ section >

               <div className=" mt-5 p-5 shadow-md ">
                  {/* <Tabela dados={data}/> */}
                </div>
      </div>
    )
}