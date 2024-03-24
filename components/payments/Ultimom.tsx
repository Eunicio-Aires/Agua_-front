
// export default function Page({ data }) {
//   // Render data...
// }

// async function getData(){
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})

//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }
 
import { getCompan, getSession } from '@/lib/cookiesConf'
import { TfiNotepad } from "react-icons/tfi";
import { GiReceiveMoney } from "react-icons/gi";


export  async   function  Ultimom(){
  const idf = await '12345'
  const comp  = await getCompan()
  const res:any = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${comp}`,{cache:"no-cache"}).then((res) => res.json());
  const umes = await  res;
  
  // const  = response;
  // const ultimoMes = dados.compan.mes[dados.compan.mes.length - 1];
  const ultimoMes = umes.compan.mes[umes.compan.mes.length - 1];
  const nomeMes = ultimoMes.mes
  const ultimom = ultimoMes.faturas.length;
  const todasFaturas = ultimoMes.faturas
  const faturasNaoPagas = ultimoMes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago");
  const faturasPagas = ultimoMes.faturas.filter((fatura: { estado: string; }) => fatura.estado !== "Nao pago");
  const totalValorFaturasNaoPagas = faturasNaoPagas.reduce((total: any, fatura: { valor: any; }) => total + fatura.valor, 0);
  const totalValorFaturasPagas = faturasPagas.reduce((total: any, fatura: { valor: any; }) => total + fatura.valor, 0);
  const valorTodasFaturas      = todasFaturas.reduce((total: any, fatura: { valor: any; }) => total + fatura.valor, 0);
  const numeroDeFaturasNaoPagas = faturasNaoPagas.length;
  const numeroDeFaturasPagas = faturasPagas.length;
//   const totalValorTodasFaturas = faturasNaoPagas.reduce((total: any, mes: { faturas: any[]; }) => {
//       const valorFaturasMes = mes.faturas.reduce((subtotal, fatura) => subtotal + fatura.valor, 0);
//       return total + valorFaturasMes;
//   }, 0);
//   const totalValorFaturasPagas = ultimoMes.reduce((total: any, mes: { faturas: any[]; }) => {
//       const valorFaturasMes = mes.faturas
//           .filter(fatura => fatura.estado === "Pago")
//           .reduce((subtotal, fatura) => subtotal + fatura.valor, 0);
//       return total + valorFaturasMes;
//   }, 0);


    return( 
        <div>
            <h2 className="text-xl font-bold ml-6 mt-8">{nomeMes}</h2>
        
            <section className="flex flex-wrap justify-center  mt-4">
                
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold mb-2 text-yellow-500"> Faturas Lidas </h2>
                    <div className=" flex justify-between">
                    <span className='flex'> <TfiNotepad className='mr-2'/> {ultimom} </span>

                    <span className='flex'> <GiReceiveMoney className='mr-2'/> {valorTodasFaturas},00 Mtn</span>
                    </div>
                   
                    
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold mb-2 text-green-500">Faturas Pagas</h2>
                    <div className=" flex justify-between">
                    <span className='flex'> <TfiNotepad className='mr-2'/> {numeroDeFaturasPagas} </span>

                    <span className='flex'> <GiReceiveMoney className='mr-2'/> {totalValorFaturasPagas},00 Mtn</span>
                    </div>
                    
                    
                    {/* <p className="text-gray-600">Faturas Não Pagas</p> */}
                    {/* <span className='text-green-700 text-lg'>{numeroDeFaturasNaoPagas}</span> */}
                   
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-bold mb-2 text-red-500">Nao Paga</h2>
                    <div className=" flex justify-between">
                    <span className='flex'> <TfiNotepad className='mr-2'/> {numeroDeFaturasNaoPagas}</span>

                    <span className='flex'><GiReceiveMoney className='mr-2'/> {totalValorFaturasNaoPagas},00 Mtn</span>
                    
                    </div>
                    
                   
                    </div>
                </div>
                </section>

           </div>
          
      
    )
}

