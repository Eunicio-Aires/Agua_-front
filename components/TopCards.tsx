'use-client'
interface Cliente {
  _id: string;
  nome: string;
  codigo: string;
  apelido: string;
  estado: string;
  faturas: any[]; 
  createdAt: string;
  __v: number;
}
export async function TopCards(){
  const clientes = await fetch('http://localhost:3000/api/todos',{cache:"no-cache"});
  const resp = await clientes.json();
  const client = await resp.data.allClientes
  
  
  
    return (
        
          <div className=" grid lg:grid-cols-5 gap-4 p-4">  
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{client.length}</p>
                <p className="text-gray-600">Daily Revenue  </p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>+18</span>
              </p>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">$7,846</p>
                <p className="text-gray-600">Daily Revenue</p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>+18</span>
              </p>
            </div>
            <div className="bg-white flex justify-btween w-full p-4 rounded">
              <div className=" flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">7,846</p>
                <p className="text-gray-600">Daily Revenue</p>
              </div>
            </div>
          </div>
    );
}