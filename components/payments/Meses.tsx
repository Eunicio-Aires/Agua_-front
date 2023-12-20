import Link from "next/link"

type mes = {
  _id: any;
  zona: string;
}

async function getData(){
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/faturar`,{cache:"no-cache"})

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async  function Meses(){
    const {data} = await getData()
    
    const meses = await data.mesesl;
    console.log(meses)
    return(
      

<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto max-w-7x1">
  <div className="flex flex-wrap w-full mb-4 p-4">
    <div className="w-full mb-6 lg:mb-0">
      <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Detalhes</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
  </div>
  <div className="flex flex-wrap -m-4">
  {meses.map((mes:any)=>(
     
    <div key={mes._id} className="xl:w-1/3 md:w-1/2 p-4 border-8 rounded-xl"> 
    
      <div className="bg-white p-6 rounded-lg">
       
        <h3 className="tracking-widest tx-gradient-to-r from-red-700 to-indigo-600 text-xs font-medium title-font">{(mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago").length /mes.faturas.length )*100}%</h3>
        <h1 className="text-lg text-gray-900 font-medium title-font mb-4">{mes.mes}</h1>

        <p className="leading-relaxed text-base">Nao pagas{mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").length}</p>

        <p>
       </p>
    


        <p className="leading-relaxed text-base">Pagas{mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago").length}</p>
        
        <p className="leading-relaxed text-base">Pagas{mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago")}</p> 
        <Link href={`/faturar/${mes._id}`} className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true">Faturar</Link>
      </div>
    </div>
     )) }
   
    
    
  </div>
  </div>

</section>
 
    )
}