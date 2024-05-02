

// async function MesData(){
//     const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})
   
  
//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()

// }

interface Fatura {
   _id: string;
   mes: string;
   leitura?: number;
   estado: "Pago" | "Nao pago";
   createdAt: string;
   updatedAt: string;
   __v?: number;
   formaDePagamento?: string;
   consumo?: number;
   valor?: number;
 }
 
 interface Mes {
   _id: string;
   mes: string;
   faturas: Fatura[];
   createdAt: string;
   __v: number;
 }
 
 interface Resultado {
   mes: Mes;
 }

export default async function UnicoMes({ params }: { params: { id: string } }){
    const id = params.id
    const res = await fetch(`https://agua-p.vercel.app/adm/mesunic/${id}`,{cache:'no-store' }).then((res) => res.json())
   
    const numFatu = await res.mes.faturas.length;
    const todasFaturas: Fatura[] = res.mes.faturas;
    const faturass = await res.mes.faturas;
    const valorTotal = await  res.mes.faturas.reduce((soma:any, fatura:any) => soma + (fatura.valor || 0), 0)

    const faturasPagas: Fatura[] = await res.mes.faturas.filter((fatura: Fatura) => fatura.estado === "Pago");
    
    const nfaturasPagas: number = await res.mes.faturas.filter((fatura: Fatura) => fatura.estado === "Pago").length
    const percentagemFaturasPagas: number = await (faturasPagas.length / todasFaturas.length) * 100; 

    // Calcular a soma dos valores das faturas pagas
    const somaValoresFaturasPagas: number = await faturasPagas.reduce((soma, fatura) => soma + (fatura.valor || 0), 0);

    const faturasNaoPagas: Fatura[] = await res.mes.faturas.filter((fatura: Fatura) => fatura.estado === "Nao pago");
    const nfaturasNaoPagas: number = await res.mes.faturas.filter((fatura: Fatura) => fatura.estado === "Nao pago").length;
    const percentagemNaoFaturasPagas: number = await (faturasNaoPagas.length / numFatu) * 100;
    

    // Calcular a soma dos valores das faturas nao pagas
    const somaValoresFaturasNaoPagas: number = await faturasNaoPagas.reduce((soma, fatura) => soma + (fatura.valor || 0), 0);

   //  formas de pagamento
   const faturasNumerario: Fatura[] = await todasFaturas.filter((fatura: Fatura) => fatura.formaDePagamento === "Numerario");
   const numeroFaturasNumerario: number = await faturasNumerario.length;
   const somaValoresFaturasNumerario: number = await faturasNumerario.reduce((soma, fatura) => soma + (fatura.valor || 0), 0);
   const percentagemFaturasNumerario: number = await (faturasNumerario.length / todasFaturas.length) * 100;


   const faturasMpesa: Fatura[] = await todasFaturas.filter((fatura: Fatura) => fatura.formaDePagamento === "M-pesa");
   const numeroFaturasMpesa: number = await faturasMpesa.length;
   const somaValoresFaturasMpesa: number = await faturasMpesa.reduce((soma, fatura) => soma + (fatura.valor || 0), 0);
   const percentagemFaturasMpesa: number = await (faturasMpesa.length / todasFaturas.length) * 100;
   

    

    return(
        
            
        
       <div  className="h-full   bg-gray-50 overflow-y-auto lg:ml-7">
         <main>
            <div className="pt-6 ">

                     {/* cards */}

               <div className="mt-4  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{valorTotal}</span>
                           <h3 className="text-base font-normal text-gray-500">Valor total lido</h3>
                        </div>
                        {/* <p className="ml-2 text-xs">{numFatu}</p> */}
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           100%
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{somaValoresFaturasPagas}</span>
                           <h3 className="text-base font-normal text-gray-500">Valor total Pago</h3>
                        </div>
                        {/* <p className="ml-2 text-xs">{nfaturasPagas}</p> */}
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        {/* {percentagemFaturasPagas}% */}
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                        {percentagemFaturasPagas}%
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{somaValoresFaturasNaoPagas}</span>
                           <h3 className="text-base font-normal text-gray-500">Faturas Nao Pagas</h3>

                        </div>
                        {/* <p>{nfaturasNaoPagas}</p> */}
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                           {/* {percentagemNaoFaturasPagas}% */}
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                        {percentagemNaoFaturasPagas}%
                     </div>
                  </div>
               </div>         
                     {/* -------------------------------------------------------------- */}

               <div className="w-max grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900"></span>
                           <h3 className="text-base font-normal text-gray-500"></h3>
                        </div>
                        <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           {/* 12.5% */}
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                     <div id="main-chart"></div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="mb-4 flex items-center justify-between">
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimas operacoes do Mes</h3>
                           <span className="text-base font-normal text-gray-500">Lista</span>
                        </div>
                        <div className="flex-shrink-0">
                           <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Todos</a>
                        </div>
                     </div>
                     <div className="flex flex-col mt-8">
                        <div className="overflow-x-auto rounded-lg">
                           <div className="align-middle inline-block min-w-full">
                              <div className="shadow overflow-hidden sm:rounded-lg">
                                 <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                       <tr>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Operacao
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Leitura
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Estado
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Valor
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {faturasPagas.map((mes:any)=>(
                                       <tr  key={mes._id}>
                                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             <span className="font-semibold">{mes.consumo}</span>
                                          </td>
                                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                          {mes.leitura}
                                          </td>
                                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                          {mes.estado}
                                          </td>
                                          <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                          {mes.valor}
                                          </td>
                                       </tr>
                                        ))}
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             
               <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  {/* <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"> */}
                        {/* View all */}
                        {/* </a>
                     </div> */}
                     {/* <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                        {faturasPagas.map((mes:any)=>(
                           <li className="py-3 sm:py-4" key={mes._id}>
                              <div className="flex items-center space-x-4">
                                 <div className="flex-shrink-0">
                                   
                                 </div>
                                 <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                    {mes.consumo}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">{mes.mes}</a>
                                    </p>
                                 </div>
                                 <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                 {mes.formaDePagamento}
                                 </div>
                              </div>
                           </li>
                            ))}
                           
                        </ul>
                     </div> */}
                  {/* </div> */}
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Formas de Pagamento</h3>
                     <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                           <thead>
                              <tr>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Canais de Pagamento</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">N de faturas</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"> Valor</th>
                                 <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">Percentagem</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Numerario</th>
                                 
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{numeroFaturasNumerario}</td>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{somaValoresFaturasNumerario}</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">{percentagemFaturasNumerario}%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             {/* <div className="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div> */}
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">M-pesa</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{numeroFaturasMpesa}</td>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">{somaValoresFaturasMpesa}</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">{percentagemFaturasMpesa}%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             {/* <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div> */}
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="text-gray-500">
                                 <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Emola</th>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                 <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                 <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                       <span className="mr-2 text-xs font-medium">0%</span>
                                       <div className="relative w-full">
                                          <div className="w-full bg-gray-200 rounded-sm h-2">
                                             {/* <div className="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div> */}
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </main>
        </div>
        
        
    )
}