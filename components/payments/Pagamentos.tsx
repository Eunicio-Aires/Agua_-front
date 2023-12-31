
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import Pagament from "@/lib/pagamentos";


async function getData(){
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export  default async  function Pagamentos(){
    // const response = await fetch(`https://agua-front.vercel.app/api/areas`,{cache:"no-cache"})
    const response = await getData();
    const faturasPagas = await response.data.ultimo[0].faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago");
    
    return(
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <h1>Pagamentos</h1>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Mes</td> 
        <td>Consumo</td> 
        <td>Valor</td> 
        <td>F.Pagamento</td>
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
    {/* </tfoot> */}
  </table>
     
 
</div>
           
        </div>
    )
}
