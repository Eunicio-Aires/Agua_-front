'use server'
import { cookies } from "next/headers";

export async function getSession(){
    const session = await cookies().get('token')?.value;
    if(!session) return null 
    return await (session) 
}

export async function getId(){
    const idComp = await cookies().get('id')?.value;
    if(!idComp) return null 
    return await (idComp)
}

interface IdEmpresa{
    _id:any;
    
}

export async function setCook(id:any) {
   const comp = await cookies().set('companid', id)
    return await (comp)
}

