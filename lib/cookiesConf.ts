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
    _id:String;
    
}

export async function setCook({_id}:IdEmpresa) {
    const id =await _id
    
}

