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
  const idf = '1234'
    const response = await fetch(`https://agua-front.vercel.app/api/mes/${idf}`,{cache:"no-cache"}).then((res) => res.json());
    
  
return(

<section className="text-gray-600 body-font">
  {/* <div className="container px-5 py-24 mx-auto max-w-7x1">
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">News</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
    {response.mesesl.map((mes:any)=>(
      <div key= {mes._id} className="xl:w-1/3 md:w-1/2 p-4 border-8">
        <div className="bg-white p-6 rounded-lg">
         
          
          <h1 className="text-lg text-gray-900 font-medium title-font mb-4">{mes.mes}</h1> 
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Faturado: {mes.faturas.length}</h3>
          <p className="leading-relaxed text-base mb-2">Fingerstache </p>
          <Link href={`/faturar/${mes._id}`} 
          >Faturar</Link>
        </div>
      </div>
       ))} 
      
    </div>
  </div> */}


  
{/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"> */}


<section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Faturacao</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Ver</button>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Mes
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Faturas Lidas
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Valor
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Faturar
                        </th>
          </tr>
        </thead>

        <tbody>
        {response.mes.map((mes:any)=>(
          <tr key= {mes._id} className="hover-gray-light transition">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
            { mes.mes }
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {mes.faturas.length}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              100%
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              <Link href={`/faturar/${mes._id}`} 
          >Faturar</Link>
            </td>
          </tr>
           ))} 
        </tbody>

      </table>
    </div>
  </div>
</div>
{/* <footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
</section>

</section>
        
) }

       