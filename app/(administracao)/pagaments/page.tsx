
import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import Chart from '@/components/Charts'
import  Pagamentos  from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
// import  Pagamentoss  from "@/lib/pagamentos"
import { NextResponse } from 'next/server'

interface Fatura {
  _id: string;
  mes: string;
  leitura: number;
  estado: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  formaDePagamento?: string; // Pode ser opcional se nem sempre estiver presente
  consumo?: number; // Adicione outras propriedades se necessário
  valor?: number;
}



interface Mes {
  _id: string;
  mes: string;
  faturas: Fatura[];
  createdAt: string;
  __v: number;
}

// const url = 'https://agua-front.vercel.app/api/faturar';


// const fetchData = async ()=>{
//   await new Promise((resolve)=>setTimeout(resolve,1000));
//   const response = await fetch(url)

//   if(!response.ok){
//     throw new Error('Falid to  fetch ')
//   }
//   const data = await response.json()
//   return data;
// }


async function getData(){
  
  const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})
   
  
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
} 


export default async  function Pagaments(){
  const data = await  getData()
  const response = await  data;
  const faturasPagas = await response.ultimo[0].faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago")
 
  
  // ________________MEses__________
  const meses = await response.mesesl;
        
        return(

          
            
            <div className=''>
              {/* @ts-ignore  */}
              {/* <Pagamentos/> */}
              {/* @ts-ignore  */}
              < Ultimom/> 
             <div className="overflow-x-auto p-4">
             
                    <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                    <tr>
                    <th></th> 
                    <td>Mes</td> 
                    <td>Consumo</td> 
                    <td>Valor</td> 
                    <td>F.Pagamentoo</td>
                    <th></th> 
                    </tr>
                    </thead> 
                    <tbody>
                    {faturasPagas.map((mes:any)=>(
                    <tr key={mes._id}>
                    <th></th> 
                    <td>{mes.mes}</td>
                    <td>{mes.consumo}</td> 
                    <td>{mes.valor}</td> 
                    
                    <td>{mes.formaDePagamento}</td> 
                    
                    </tr>
                    ))}
                    
                    </tbody> 
                  
                    </table>
    
    
   

        </div>


        <Chart/>

   







{/* ____________________________________MESES____________________________________ */}
<div className="container px-5 py-24 mx-auto max-w-7x1">
  <div className="flex flex-wrap w-full mb-4 p-4">
    <div className="w-full mb-6 lg:mb-0">
      <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Detalhes</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
  </div>
  <div className="flex flex-wrap -m-4">
  {meses.map((mes:Mes)=>(
     
    <div key={mes._id} className="xl:w-1/3 md:w-1/2 p-4 border-8 rounded-xl"> 
    
      <div className="bg-white p-6 rounded-lg">
       
        <h3 className="tracking-widest tx-gradient-to-r from-red-700 to-indigo-600 text-xs font-medium title-font">{(mes.faturas.filter((fatura: { estado: any; }) => fatura.estado === "Pago").length /mes.faturas.length )*100}%</h3>
        <h1 className="text-lg text-gray-900 font-medium title-font mb-4">{mes.mes}</h1>

        <p className="leading-relaxed text-base">Nao pagas{mes.faturas.filter((fatura: { estado: String ; }) => fatura.estado === "Nao pago").length}</p>

        <p>
       </p>
    


        <p className="leading-relaxed text-base">Pagas{mes.faturas.filter((fatura: { estado: String; }) => fatura.estado === "Pago").length}</p>
        
        {/* <p className="leading-relaxed text-base">Pagas{mes.faturas.filter((fatura: { estado: String; }) => fatura.estado === "Pago")}</p>  */}
        <Link href={`/pagaments/${mes._id}`} className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true">Faturar</Link>
      </div>
    </div>
     ))}
   
    
    
  </div>
  </div>

  <div className="bg-gray-50 ">
  {/* <nav>
    <div class="flex justify-between items-center p-4 bg-white">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <div class="w-10">
          <img class="rounded-full" src="https://forbesthailand.com/wp-content/uploads/2021/08/https-specials-images.forbesimg.com-imageserve-5f47d4de7637290765bce495-0x0.jpgbackground000000cropX11699cropX23845cropY1559cropY22704.jpg" alt="" />
        </div>
      </div>
    </div>
  </nav> */}
  <div>
    <div className="p-4">
      <div className="bg-white p-4 rounded-md">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
          <div>
            <div>
              <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Email</span>
                </div>
                <div>
                  <span>Role</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
                <div>
                  <span>Edit</span>
                </div>
              </div>
              <div>
              {meses.map((mes:Mes)=>(
                <div key={mes._id } className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div className="px-2 flex">
                    <span>{mes.mes}</span>
                  </div>
                  <div>
                    <span>{(mes.faturas.filter((fatura: { estado: any; }) => fatura.estado === "Pago").length /mes.faturas.length )*100}%</span>
                  </div>
                  <div className="px-2">
                    <span>Pagas {mes.faturas.filter((fatura: { estado: String; }) => fatura.estado === "Pago").length}</span>
                  </div>
                  <div className="px-2">
                    <span>N. Pago {mes.faturas.filter((fatura: { estado: String ; }) => fatura.estado === "Nao pago").length}</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
                 ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   
            </div>
          
          
          
          

   
              )
}