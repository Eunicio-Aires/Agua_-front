
export default async function ClienteId({ params }: { params: { id: string } }){
    const compan = await  fetch(`https://agua-front.vercel.app/api/adminComp/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
    const nome  = await compan.nome
    const apelido  = await compan.apelido
    return(
        <>
            <div>{nome} {apelido}</div>
        </>
    )

}