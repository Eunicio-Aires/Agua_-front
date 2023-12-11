"use client"
import Link from 'next/link';
import {BsArrowBarRight, BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { useState } from "react";
import React from 'react'
import  { BiUserPlus } from "react-icons/bi";
type Client ={
    _id:any;
    nome:String;
    apelido:String
  }
  type Zona={
    _idZona:String
  }
  type ConsumidoresProps ={
    clientes:Client[]
  }
  type ClienteId ={
    _idAtual:String
  }

export default  function OtherUsers({_idZona}:Zona){
  const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [outrasZonas, setoutrasZonas] = React.useState([])
    
        React.useEffect(()=>{
            (async () =>{
                const zonas = await fetch(`http://localhost:3000/api/clieentx`,{cache:"no-cache"}).then((res) => res.json())
                // const clientes = await zona.zonasl.cliente
                const zona = zonas.allAreas
                setoutrasZonas(
                    zona.filter((zona:any) => zona._id !== _idZona)
                )
            })()
        },[_idZona,setoutrasZonas])
        const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
        const buttonHandler = () => {
          setIsBlueBoxShown(!iseBlueBoxShown);
        }

    return  (
      <div className="transition ease-in-out delay-150">
    <button className=' btn btn-outline btn-success ml-6'  onClick={buttonHandler}>
      {iseBlueBoxShown ? "Fechar" : <BiUserPlus/> }
    </button> 
    {iseBlueBoxShown && <div className="flex items-center justify-center p-12 " >
        <section className="bg-white p-5 m-3 rounded">
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 p-4 gap-4">
    {outrasZonas.map((zon:any) => ( 
       
       
        <div key={zon._id} className="flex justify-evenly items-center  p-3 m-3 border border-gray-300 rounded">
          <Link href={`http://localhost:3000/clientes/${zon._id}`}>
        <div className="text-center">
            <h2 className="text-4sm font-bold pb-2 text-green-400">{zon.zona}-{zon.cliente.length}</h2>
          </div>
          </Link>
          </div>
      ))}
      </div>
       </section>
      </div> }
       </div>
)
}