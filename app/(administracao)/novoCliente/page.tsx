
export default async function NCliente(){
    const zonas = await fetch('https://agua-front.vercel.app/api/areas',{cache:'no-store'}).then((res) => res.json())
    return(
        <div>
            {zonas.map((zona:any)=>(
            <div  key={zona._id } >
                contalksd
            </div>

          ))}
        </div>
    )
}