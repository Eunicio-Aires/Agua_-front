import { cookies } from "next/headers"
import Link from "next/link"
import { getId } from '@/lib/cookiesConf'

export default async function ClienteId({ params }: {params:{id: string }}){
    // const cookie =await cookies()
    // const toke = await cookie.get('token')
    // const idt = await cookie.get('id')
    
    const idt = await getId()
    const compan = await  fetch(`https://agua-front.vercel.app/api/adminComp/${params.id}`,{cache: 'no-store'}).then((res) => res.json())
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    const idc  = await compan._id
    const comp = await compan.company
    return(
        <>
        

         <div>{nome} {apelido}</div>
            {comp.map((companes:any)=>(
                <div  key={companes._id}>
                    <Link href={`/inicial/${idc}`}>
                        <div>{companes.nome}</div>
                        <div>{companes.clientes.length}</div>
                    </Link>
         </div>
                        
                    ))}

        </>
    )

}