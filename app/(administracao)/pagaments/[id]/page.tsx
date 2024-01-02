

async function MesData(){
    const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})
   
  
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()

}
export default async function UnicoMes({ params }: { params: { id: string } }){
    const id = params.id
    const res = await fetch(`https://agua-p.vercel.app/adm/mesunic/${id}`,{cache:"no-cache"})

    return(
        <>
            <p>My Post: {id}</p>
        </>
    )
}