import { getCompan } from '@/lib/cookiesConf'
export  async function Pagamentoss(){
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Use baseUrl conforme necessário em seu código

    const res = await fetch(`${baseUrl}/api/faturar`,{cache:"no-cache"})

    if(!res.ok){
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export  async function MesesDados(){
  const comp  = await getCompan()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res:any = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${comp}`,{cache:"no-store"})
  const ultimosMeses = await res.compan.mes.slice(-7)
  if(!ultimosMeses.ok){
    throw new Error('Failed to fetch data')
  }
  return ultimosMeses.json()
  
}