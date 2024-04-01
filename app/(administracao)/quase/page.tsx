import { getSession } from '@/lib/cookiesConf' 
import { redirect } from 'next/navigation'

async function getData() {
    const token = await  getSession()
    const authorization = await token
    const res = await fetch('https://agua-p.vercel.app/adm/testeaautenti',{
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

export default async function Quase(){
    
   const data = await getData()

    return <div>
        <h1>{data.res}</h1>
    </div>
}