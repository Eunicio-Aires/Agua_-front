import { cookies } from "next/headers"
import Link from "next/link"
import { getId, getSession } from '@/lib/cookiesConf'
import { userStore } from '@/store/user'
import  Redbutton  from '@/components/redrtt/Rediret'
import { Input } from "@/components/ui/input"



export default async function ClienteId({ params }: {params:{id: string }}){
    const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    
    // const { id, setId } = userStore();

    // const cookie =await cookies()
    // const toke = await cookie.get('token')
    // const idt = await cookie.get('id')
    // const user = await userStore((state:any)=> state.user)
    
    
    // const idt = await getSession()
    const compan = await  fetch(`${baseUrl}/api/adminComp/${params.id}`,{cache: 'no-store'}).then((res) => res.json())
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    const idc  = await compan._id
    const comp = await compan.company
    // setId(idc);
    return(
        <>
        <Input/>
        {/* <p>ID: {id}</p> */}
        {/* <span>{user.}</span> */}
        {/* <span>{idt}</span> */}
         {/* <div>{nome} {apelido}</div> */}
            {comp.map((companes:any)=>(
                <div  key={companes._id}>
                    <Link href={`/inicial/${companes._id}`}>
                        <div>{companes.nome}</div>
                        <div>{companes.clientes.length}</div>
                    </Link>

                    <Redbutton _id={companes._id}/>
         </div>
                        
                    ))}

        </>
    )

}