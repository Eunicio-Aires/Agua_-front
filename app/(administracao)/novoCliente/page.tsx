import Link from "next/link"
export default async function NCliente(){
    const zonas = await fetch('https://agua-p.vercel.app/adm/allAreas',{cache:'no-store'}).then((res) => res.json())
    return(
        <div>
            Seleciona a Area
            {zonas.allAreas.map((zona:any)=>(
            <div  key={zona._id } >
                <p>{zona._id}</p>
                <p>{zona.zona}</p>
                <Link href={`/novoCliente/${zona._id}`}>selecionar</Link>
            </div>

          ))}
          
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    {zonas.allAreas.map((zona:any)=>(
    <div key={zona._id } className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div   className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{zona.zona}</p>
                <p className="text-base text-gray-400 font-normal">{zona.cliente.length}</p>
            </div>
        </div>
       
    </div>
     ))}
</section>



        </div>
    )
}