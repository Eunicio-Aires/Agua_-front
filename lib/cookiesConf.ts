'use server'
import { cookies } from "next/headers";

export async function getSession(){
    const session = await cookies().get('token')?.value;
    if(!session) return null 
    // const token = await `Bearer ${session}`
    return await (session) 
}

export async function getId(){
    const idComp = await cookies().get('id')?.value;
    if(!idComp) return null 
    return await (idComp)
}

export async function getemail(){
    const idComp = await cookies().get('email')?.value;
    if(!idComp) return null 
    return await (idComp)
}
export async function getnome(){
    const idComp = await cookies().get('nome')?.value;
    if(!idComp) return null 
    
    return await (idComp)
}
export async function getapelido(){
    const idComp = await cookies().get('apelido')?.value;
    if(!idComp) return null 
    return await (idComp)
}
interface IdEmpresa{
    _id:any;
    
}

export async function getCompan(){
    const compa = await cookies().get('idCompan')?.value;
    if(!compa) return null 
    return await (compa) 
}

export async function setCook(id:any) {
    cookies().set('compa', id)
   
}

