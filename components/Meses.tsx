'use-client'
import Link from "next/link"

type faturas={
    _id:String;
    mes:String;
    valor:Number
}

interface Mes{
    _id:String;
    faturas:faturas[]
}

export async function Meses(mes:Mes){
    const response = await fetch('http://localhost:3000/api/faturar',{cache:"no-cache"}).then((res) => res.json());
    // console.log(response) 
  
return(

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto max-w-7x1">
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">News</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
    {response.data.mesesl.map((mes:any)=>(
      <div key= {mes._id} className="xl:w-1/3 md:w-1/2 p-4 border-8">
        <div className="bg-white p-6 rounded-lg">
          {/* <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400"> */}
          
          <h1 className="text-lg text-gray-900 font-medium title-font mb-4">{mes.mes}</h1> 
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Faturado: {mes.faturas.length}</h3>
          <p className="leading-relaxed text-base mb-2">Fingerstache </p>
          <Link href={`/faturar/${mes._id}`} className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3"
          data-ripple-light="true">Faturar</Link>
        </div>
      </div>
       ))} 
      
    </div>
  </div>
</section>
        
) }

       