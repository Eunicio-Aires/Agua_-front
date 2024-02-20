import { cookies } from "next/headers"
import Link from "next/link"

export default async function ClienteId({ params }: {params:{id: string }}){
    const cookie =await cookies()
    const toke = await cookie.get('token')
    const idt = await cookie.get('id')
    
    const compan = await  fetch(`https://agua-front.vercel.app/api/adminComp/${params.id}`,{cache: 'no-store'}).then((res) => res.json())
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    const id  = await compan._id
    const comp = await compan.company
    return(
        <>
        

         <div>{nome} {apelido}</div>
            {comp.map((companes:any)=>(
                <div  key={companes._id}>
                    <Link href={`/inicial/${idt}`}>
                        <div>{companes.nome}</div>
                        <div>{companes.clientes.length}</div>
                    </Link>
         </div>
                        
                    ))}

        </>
    )

}