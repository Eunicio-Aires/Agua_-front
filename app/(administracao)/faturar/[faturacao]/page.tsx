import Link from "next/link";
import React, { SyntheticEvent } from 'react';
import { Procurarc } from '@/components/Procurarc'
import { Detalhes } from "@/components/Detalhes";
type faturas={
    _id:String;
    mes:String;
    valor:Number
}

interface Cliente{
    _idc:String;
    
}
interface Mes {
    _id:String;
    
}
export default async function Page({ params }:{ params:{faturacao:Mes}}) {
    
    const posts = await fetch(`https://agua-p.vercel.app/adm/mesunic/${params.faturacao}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE3NzRjMGUyODA5OTAwMmYxNThlMyIsImlhdCI6MTcwOTgyMTA3MSwiZXhwIjoxNzA5OTA3NDcxfQ.oeKHAXmxlcfCFwSyBc7A0HxlSrH2vrjfgaZj-mKk3-8`,
        },
    //    body: JSON.stringify( resb )
      }).then((res) => res.json());
    const mes = await posts.mes._id;

    return (
       <div  className="flex" >
            {/* <h1 className="text-center text-xl font-bold tracking-normal sm:text-4xl lg:text-4xl mt-1">{posts.mes.mes}</h1>  */}
            
        <Procurarc _id={mes}/>
        </div>
            
    ) 
}

