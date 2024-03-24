
import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import Chart from '@/components/Charts'
import  Pagamentos  from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
import { getCompan } from '@/lib/cookiesConf'
// import  Pagamentoss  from "@/lib/pagamentos"
import { NextResponse } from 'next/server'
import { GrLinkNext } from "react-icons/gr";


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

// async function getData(){
//   const comp  = await getCompan()
//   const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${comp}`,{cache:"no-cache"}).then((res) => res.json());
   
  
//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// } 


export default async  function Pagaments(){
  // const data = await getData()
  const comp  = await getCompan()
  // const nome = await data.compan.nome
  // const idf = await '12345'
  const res:any = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${comp}`,{cache:"no-cache"}).then((res) => res.json());
  const ultimosMeses = await res.compan.mes.slice(-10)
  const mesultimo = await ultimosMeses[ultimosMeses.length - 1];
  // const mesultimo = await res.compan.mes.slice(-1)
  const ultimo = await mesultimo.faturas.filter((fatura: { estado: string; }) => fatura.estado !== "Nao pago");
  const nome = await res.compan.nome;
  // res.compan.mes[0]
  // const mes = await res.compan.mes 
  // if(!res.ok){
  //   throw new Error('Failed to fetch data')
  // }
  // return res.json()
  // const response = await  res;
  // const ultimoMes = response.compan.mes.pop();
  // ________________MEses__________
  // const meses = await response.mesesl;
        
        return(

          
            
            <div className=''>
              

           {/* @ts-expect-error Server Component */}
              <Ultimom/>

                <section className="flex flex-wrap justify-center mt-5">
                <div className="w-full md:w-1/2 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2">  </h2>
                    
                    <Chart/>
                    
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 ">
                    <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-2"> </h2>

                    <div className="overflow-x-auto p-4 rounded-lg shadow-md">
                <table className="table table-xs table-pin-rows table-pin-cols">
                  <thead > 
                    <tr>
                      <th></th>
                      <th>Mês</th>
                      <th>Consumo</th>
                      <th>Valor</th>
                      <th>F. Pagament</th>
                      {/* <th>Detalhes</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {ultimo.map((mes:any)=>(
                      <tr key={mes._id}>
                        <td></td>
                        <td> {mes.mes}</td>
                        <td>{mes.consumo || '-'}</td>
                        <td className='text-green-500'>{mes.valor || '-'}</td>
                        <td> {mes.formaDePagamento || '-'} </td>
                        {/* <td><Link href={''} className="btn btn-xs">Ver</Link></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                   
                   
                   
                    </div>
                </div>
                
                </section>


              <div className="overflow-x-auto p-4 bg-gray-50 rounded-md shadow-md">
                <table className="table table-xs table-pin-rows table-pin-cols">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Mês</th>
                      <th>Faturas</th>
                      <th>N. Pagas</th>
                      <th>Pagas</th>
                      <th>Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ultimosMeses.map((mes:any)=>(
                      <tr key={mes._id}>
                        <td></td>
                        <td> {mes.mes}</td>
                        <td className='text-yellow-500'>{mes.faturas.length || '-'}</td>
                        <td className='text-red-500'>{mes.faturas.filter((fatura:any) => fatura.estado === 'Nao pago').length || '-'}</td>
                        <td className='text-green-500'> {mes.faturas.filter((fatura:any) => fatura.estado !== 'Nao pago').length || '-'} </td>
                        <td><Link href={`pagaments/${mes._id}`} className="btn btn-xs"><GrLinkNext /></Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              


{/* ____________________________________MESES____________________________________ */}


{/* <div className="bg-gray-50">
  <div className="max-w-screen-lg mx-auto">
    <div className="p-4">
      <div className="bg-white p-4 rounded-md">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
          <div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div className="w-full sm:w-auto">
                  <span>Mes</span>
                </div>
                <div className="w-full sm:w-auto">
                  <span>Percent</span>
                </div>
                <div className="w-full sm:w-auto">
                  <span>F. Pagas</span>
                </div>
                <div className="w-full sm:w-auto">
                  <span>FN. Pags</span>
                </div>
                <div className="w-full sm:w-auto">
                  <span>Edit</span>
                </div>
              </div>
              <div>
                {response.compan.mes.map((mes: Mes) => (
                  <Link href={`/pagaments/${mes._id}`} key={mes._id}>
                    <div className="flex flex-col sm:flex-row justify-between border-t text-sm font-normal mt-4 space-x-4">
                      <div className="px-2 flex w-full sm:w-auto">
                        <span>{mes.mes}</span>
                      </div>
                      <div className="px-2 w-full sm:w-auto">
                        <span>{(mes.faturas.filter((fatura: { estado: any; }) => fatura.estado === "Pago").length / mes.faturas.length) * 100}%</span>
                      </div>
                      <div className="px-2 w-full sm:w-auto">
                        <span> {mes.faturas.filter((fatura: { estado: String; }) => fatura.estado === "Pago").length}</span>
                      </div>
                      <div className="px-2 w-full sm:w-auto">
                        <span> {mes.faturas.filter((fatura: { estado: String; }) => fatura.estado === "Nao pago").length}</span>
                      </div>
                      <div className="px-2 w-full sm:w-auto">
                        
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
   
            </div>
          
          
          
          

   
              )
}