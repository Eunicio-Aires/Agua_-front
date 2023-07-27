import Link from "next/link"
interface Zona {
  _id:String;
  zona:String;
  clientes:[]
}
export default async function Page({ params }: { params: {zona: Zona } }) {
    const posts = await fetch(`http://localhost:3101/zonaSeleciona/${params.zona}`).then((res) => res.json())
    const cliente = await posts.zonasl.cliente
    return (
       <div>My Post: {posts.cliente}
         {cliente.map((zon:any) => (
       

       <div key={zon._id} className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg">
         <Link href={`http://localhost:3000/clientes/${zon._id}`}><p>{zon.nome}</p></Link> 
         </div>
        
        
     ))}
       
       </div>
    )
  }  