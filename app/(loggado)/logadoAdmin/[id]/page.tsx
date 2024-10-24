import { cookies } from "next/headers"
import Link from "next/link"
import { getId, getSession } from '@/lib/cookiesConf'
import { userStore } from '@/store/user'
import  Redbutton  from '@/components/redrtt/Rediret'
import { Input } from "@/components/ui/input"
import { redirect } from 'next/navigation'




export default async function ClienteId({ params }: {params:{id: string }}){
    const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    const compan = await  fetch(`${baseUrl}/api/adminComp/${params.id}`,{cache: 'no-store'}).then((res) => res.json())

    async function getData() {
        const token = await  getSession()
        // const authorization = await token
        const res = await fetch(`https://agua-p.vercel.app/adm/adminComp/${params.id}`,{
            headers: {
              authorization: `${token}`,
            },
          })
        if (!res.ok) {
            if (res.status === 401) {
                
                redirect(`/work`)
                
            }
            redirect(`/work`)
        }
      
        return res.json();
      }

      const posts = await getData()
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    const idc  = await compan._id
    const comp = await compan.company
    // setId(idc);
    return(
       
                <main className=" min-h-screen p-4 mb-4">

                    <section className="flex flex-wrap justify-center">
                    {comp.map((companes:any)=>(
                    <div key={companes._id } className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2"> {companes.nome} </h2>
                    <p>{companes.clientes.length}</p>
                    <Redbutton _id={companes._id}/>
                    
                    </div>
                   
                </div>
                 ))}
               </ section >
               </main>
    )

}