
export default async function NCliente(){
    const zonas = await fetch('https://agua-p.vercel.app/adm/allAreas',{cache:'no-store'}).then((res) => res.json())
    return(
        <div>
            {zonas.allAreas.map((zona:any)=>(
            <div  key={zona._id } >
                <p>{zona._id}</p>
                <p>{zona.zona}</p>
            </div>

          ))}
        </div>
    )
}