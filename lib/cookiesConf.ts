import { cookies } from "next/headers";

export async function getSession(){
    const session = await cookies().get('token')?.value
    if(!session) return null;
    return (session) 
}

