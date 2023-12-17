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
    // const posts = await fetch(`https://agua-p.vercel.app/adm/mesunic/${params.faturacao}`,{cache:"no-cache"}).then((res) => res.json());
    // const mes = await posts.mes._id;

    return (
       <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
            {/* <h1 className="text-center text-3xl font-bold tracking-normal sm:text-4xl lg:text-4xl mt-3">{posts.mes.mes}</h1> */}
            {/* <h2>{posts.mes._id}</h2> */}
            {/* <Procurarc _id={mes}/> */}

           

        </div>
            
    ) 
}