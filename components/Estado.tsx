
export async function Estado(){
    const response = await fetch('https://agua-p.vercel.app/adm/todos',{cache:"no-cache"}).then((res) => res.json());
    const clients = await response.allClientes
    
    return(
        <>
        </>
    )
}