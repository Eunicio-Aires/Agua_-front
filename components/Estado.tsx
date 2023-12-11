
export async function Estado(){
    const response = await fetch('http://localhost:3001/adm/todos',{cache:"no-cache"}).then((res) => res.json());
    const clients = await response.allClientes
    
    return(
        <>
        </>
    )
}