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
    const idComp = await cookies().get('idComp')?.value;
    if(!idComp) return null 
    return await (idComp) 
}

export async function getMesSave(){
    const mesid = await cookies().get('MesSave')?.value;
    if(!mesid) return null
    return await (mesid)
}

export async function setCook(id:any) {
    cookies().set('compa', id)
   
}


export async function mesId(id:any){
    const mesIdf = await cookies().get('mesId')?.value;
    if(!mesIdf) return null 
    return await (mesIdf) 
}
