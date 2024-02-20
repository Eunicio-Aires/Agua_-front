import { cookies } from "next/headers";

export async function getSession(){
    const session = await cookies().get('token')
    
    return (session) 
}

export async function getId(){
    const idComp = await cookies().get('id')
    return (idComp)
}

