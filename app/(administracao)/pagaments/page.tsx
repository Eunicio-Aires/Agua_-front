
import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import Chart from '@/components/Charts'
import  Pagamentos  from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
import { getCompan, getSession } from '@/lib/cookiesConf'
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
  const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${comp}`,{cache:"no-cache"}).then((res) => res.json());
  const ultimosMeses = res.compan.mes.slice(-10)
  const nome = await res.compan.nome;
  
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
              <p>{nome}</p>
              <div className="overflow-x-auto p-4">
                <table className="table table-xs table-pin-rows table-pin-cols">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Mês</th>
                      <th>Faturas</th>
                      <th>N. Pagas</th>
                      <th>Pagas</th>
                      <th><Link href={''} className="btn btn-xs">Ver detalhes</Link></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ultimosMeses.map((mes:any)=>(
                      <tr key={mes._id}>
                        <td></td>
                        <td> {mes.mes}</td>
                        <td>{mes.faturas.length || '-'}</td>
                        <td>{mes.faturas.filter((fatura:any) => fatura.estado === 'Nao pago').length || '-'}</td>
                        <td> {mes.faturas.filter((fatura:any) => fatura.estado === 'Nao pago').length || '-'} </td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


        <Chart/>


{/* ____________________________________MESES____________________________________ */}


<div className="bg-gray-50">
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
                {/* {response.compan.mes.map((mes: Mes) => (
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
                ))} */}
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