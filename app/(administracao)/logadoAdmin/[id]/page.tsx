import { cookies } from "next/headers"
import Link from "next/link"
import { getId, getSession } from '@/lib/cookiesConf'
import { create } from 'zustand'



export default async function ClienteId({ params }: {params:{id: string }}){
    // const cookie =await cookies()
    // const toke = await cookie.get('token')
    // const idt = await cookie.get('id')

    const userStore = await create((set)=>{
        user:{
            full_name:'Guilherme'
        }
    })
    const usere =  await userStore ((state:any)=>state.user)
    const idt = await getSession()
    const compan = await  fetch(`https://agua-front.vercel.app/api/adminComp/${params.id}`,{cache: 'no-store'}).then((res) => res.json())
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    const idc  = await compan._id
    const comp = await compan.company
    return(
        <>
        <span>{usere.full_name}</span>
        <span>{idt}</span>
         <div>{nome} {apelido}</div>
            {comp.map((companes:any)=>(
                <div  key={companes._id}>
                    <Link href={`/inicial/${companes._id}`}>
                        <div>{companes.nome}</div>
                        <div>{companes.clientes.length}</div>
                    </Link>
         </div>
                        
                    ))}

        </>
    )

}