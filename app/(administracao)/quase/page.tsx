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
       

    //     headers: {
    //       'Content-Type': 'application/json',
    //       'authorization': "token",
    //     },
    //   }
      
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
        if (res.status === 401) {
            // Redireciona para a página de login, por exemplo
            redirect(`/work`)
            // Alternativamente, você pode usar o hook useRouter do Next.js se estiver dentro de um componente do Next.js
            // useRouter().push('/login');
        }
        // Outros erros de resposta, lança um erro
        throw new Error('Failed to fetch data');
    }

    return res.json();
  }

export default async function Quase(){
    
   const data = await getData()

    return <div>
        <h1>{data.res}</h1>
    </div>
}