
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
 


export  async   function  Ultimom({mes}:any){
  
  const response = mes
    const ultimom =   response.faturas.length;
    const faturasNaoPagas = response.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago");
    const faturasPagas = response.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago");
    const totalValorFaturasNaoPagas = faturasNaoPagas.reduce((total: any, fatura: { valor: any; }) => total + fatura.valor, 0);
    const numeroDeFaturasNaoPagas = faturasNaoPagas.length;
    const numeroDeFaturasPagas = faturasPagas.length
    const totalValorTodasFaturas = response.reduce((total: any, mes: { faturas: any[]; }) => {
        const valorFaturasMes = mes.faturas.reduce((subtotal, fatura) => subtotal + fatura.valor, 0);
        return total + valorFaturasMes;
    }, 0);
    const totalValorFaturasPagas = response.reduce((total: any, mes: { faturas: any[]; }) => {
        const valorFaturasMes = mes.faturas
            .filter(fatura => fatura.estado === "Pago")
            .reduce((subtotal, fatura) => subtotal + fatura.valor, 0);
        return total + valorFaturasMes;
    }, 0);

    

    return( 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
            <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{totalValorFaturasPagas}-Mtn</p>
                <p className="text-gray-600">Faturas Pagas</p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>{numeroDeFaturasPagas}</span>
              </p>
            </div>
            <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{totalValorFaturasNaoPagas}-Mtn</p>
                <p className="text-gray-600">Faturas Não Pagas</p>
              </div>
              <p className="bg-red-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>{numeroDeFaturasNaoPagas}</span>
              </p>
            </div>
            <div className="bg-white flex justify-btween w-full p-4 rounded">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{totalValorTodasFaturas}-Mtn</p>
                <p className="text-gray-600">Todas {ultimom}</p>
              </div>
            </div>
          </div>
          
      
    )
}

