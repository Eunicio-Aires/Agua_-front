import { getCompan } from '@/lib/cookiesConf'
import { Meses }  from '@/components/Meses'
import Link from 'next/link';



async function getData() {
  const res = await fetch(`https://agua-front.vercel.app/api/mes/`, {cache: "no-cache"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Faturar(){
  const idf = await '1234sdfsdgfhjklbjhl';
  // const response = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/65a956bb8f3b0f53bed8bf8d`, {cache: "no-cache"})
  const data = await getData()
  const nome = await data.compan.nome

  // sera necessaria ateracao para Api
  // const data = await response.json();
  
  // Verifica se o objeto retornado contém a propriedade "compan"
  // const nome = data.compan.nome;
  // const meses = await data.compan.mes;
  // if (data && data.compan) {
  //     const nome = data.compan.nome;
  //     console.log(nome);
  // } else {
  //     console.error("O objeto retornado não contém a propriedade 'compan'");
  // }

 
  return(
    <div className="">
    
   <p>{nome}</p>

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
        {/* {meses.map((mes:any)=>(
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
           ))}   */}
        </tbody> 

      </table>
    </div>
  </div>
</div>
</section> 
{/* <code> {meses} </code> */}
    </div>
  )
}