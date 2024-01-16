
export default function Clientes({clientesPrps}:any){

    return(
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">          
         {/* <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                <tr>
                    <th></th> 
                    <td>Nome</td> 
                    <td>Codigo</td> 
                    <td>F.N Pagas</td> 
                    <td>Contato</td>
                    <th>Estado</th> 
                </tr>
                </thead> 
                <tbody>
                {clientesPrps.map((mes:any)=>(
                <tr key={mes._id} className="hover:bg-gray-300"   >
                    <th></th> 
                    <td>{mes.nome} {mes.apelido} </td>
                    <td>{mes.codigo}</td> 
                    <td> {mes.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length} </td>                
                    <td>{mes.telefone}</td> 
                    <td><Link  href={`/clientes/${mes._id}`} > {mes.estado}</Link> </td> 
                </tr> 
                ))}
            </tbody> 
            </table>
        </div>         */}
      </div>
    )
}