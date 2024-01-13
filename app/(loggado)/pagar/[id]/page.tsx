
export default async function ClienteId({ params }: { params: { id: string } }){
    const  res = await fetch(`https://agua-p.vercel.app/adm/fatura/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
    const id = await res._id
    return(
        <>
            <div>
                <h1>{res.mes}</h1>
                <h3>{res.valor}</h3>
                
            </div>
        </>
    )
}