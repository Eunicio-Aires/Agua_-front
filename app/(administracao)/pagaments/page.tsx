
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




// async function getData(){
  
//   const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"}).then((res) => res.json());
   
  
//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// } 


export default async  function Pagaments(){
  const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"}).then((res) => res.json());
  // const data = await  getData()
  const response = await  res;
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


  <div className="bg-gray-50 ">
 
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
              <Link href={`/pagaments/${mes._id}` } key={mes._id } > <div  className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
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
                    {/* <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select> */}
                  </div>
                </div> </Link> 
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