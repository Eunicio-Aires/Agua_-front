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
    const posts = await fetch(`https://agua-p.vercel.app/adm/mesunic/${params.faturacao}`,{cache:"no-cache"}).then((res) => res.json());
    const mes = await posts.mes._id;

    return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-center text-xl font-bold tracking-normal sm:text-4xl lg:text-4xl mt-1">{posts.mes.mes}</h1> 
            
        <Procurarc _id={mes}/>

           

        </div>
            
    ) 
}

