export default async function Pagamentoss(){
    const res = await fetch('http://localhost:3000/api/faturar',{cache:"no-cache"})

    if(!res.ok){
      throw new Error('Failed to fetch data')
    }
    return res.json()
}