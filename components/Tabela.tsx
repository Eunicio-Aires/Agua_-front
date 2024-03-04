'use client'

export default function Tabela(dados:any){
  console.log(dados)
  
    return(
        <div className="overflow-x-auto h-96">
        <table className="table  table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className='bg-gray-100'>             
              <td>Name</td> 
              <td>Job</td> 
              <td>company</td> 
              <td>location</td> 
              <td>Last Login</td> 
              <td>Favorite Color</td>
              <th></th> 
            </tr>
          </thead> 
          <tbody>
          {dados.map((client:any)=>(
            <tr key={client._id}>             
              {/* <td>{client.nome} {client.apelido}</td> 
              <td>{client.codigo}</td> 
              <td></td> 
              <td>{client.telefone}</td> 
              <td>12/16/2020</td> 
              <td>Blue</td>
              <th>1</th>  */}
           
            </tr>
            ))}
            <tr>
               
              <td>Hart Hagerty</td> 
              <td>Desktop Support Technician</td> 
              <td>Zemlak, Daniel and Leannon</td> 
              <td>United States</td> 
              <td>12/5/2020</td> 
              <td>Purple</td>
              <th></th>
            </tr>
            {/* <tr>              
              <td>Brice Swyre</td> 
              <td>Tax Accountant</td> 
              <td>Carroll Group</td> 
              <td>China</td> 
              <td>8/15/2020</td> 
              <td>Red</td>
              <th></th> 
            </tr> */}
           
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
              <td>Name</td> 
              <td>Job</td> 
              <td>company</td> 
              <td>location</td> 
              <td>Last Login</td> 
              <th></th> 
            </tr>
          </tfoot>
        </table>
      </div>
    )
}

