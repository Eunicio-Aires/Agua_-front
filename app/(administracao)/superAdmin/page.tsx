import DefinirValor from '@/components/DefinirValor';
import { getId, getSession } from '@/lib/cookiesConf'


async function getData() {
    const token = await  getSession()
    const res = await fetch('https://agua-p.vercel.app/adm/allAdmins',{
        headers: {
          authorization: `${token}`,
        },
      })
  
   
    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


export default async function SuperAdm(){
   const todos = await getData()
   const admins = await todos.allAdmin
    
    return(
       
        <div>
            {admins.map((companes:any)=>(
                <div key={companes._id}> {companes.nome} {companes.apelido}</div>
                ))}
        </div>
        
    )
}