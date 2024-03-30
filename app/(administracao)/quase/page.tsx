import { getSession } from '@/lib/cookiesConf' 

async function getData() {
    const token = await  getSession()
    const authorization = await token
    const res = await fetch('https://agua-p.vercel.app/adm/testeaautenti',{
        headers: {
        //   'Content-Type': 'application/json',
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
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Quase(){
   const data = await getData()
    return <div>
        <h1>{data}</h1>
    </div>
}