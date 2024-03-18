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

export default async function Page({ params }: { params: { id: string } }) {
    const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    const posts = await fetch(`${baseUrl}/api/mesUnic/${params.id}`,{cache:'no-store'}).then((res) => res.json());
    // const mes = await posts.mes._id;

    return (
       <div  className="flex" >
            {/* <h1 className="text-center text-xl font-bold tracking-normal sm:text-4xl lg:text-4xl mt-1">{posts.mes.mes}</h1>  */}
            <p>klnklnklj;jujhuiohuh</p>
        {/* <Procurarc _id={mes}/> */}
        </div>
            
    ) 
}

