

interface Cliente{
    _id:String; 
}
export async function Detalhes({_id}:Cliente){
    if(!_id){
        return(
            <> <p>Dados do cliente</p> </>
        )
    }
    const cliente = await fetch(`http://localhost:3001/adm/clientpr/${_id}`,{cache:'no-cache'}).then((res) => res.json())
    return(
        <>
        <h1>Testando</h1>
        </>
    )
}