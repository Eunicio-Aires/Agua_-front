import { MdPhotoSizeSelectLarge } from "react-icons/md";

export default async function Imprimir({ params }:{ params:{id:any}}){
    const posts = await fetch(`https://agua-p.vercel.app/adm/clientpr/${params.id}`,{cache:"no-cache"}).then((res) => res.json());
    const cliente = await posts.client;
    const faturas = await posts.faturasP
    console.log(cliente)
    return(
        <>
            <div className="p-2">
                <h1 className="text-center text-4xl mt-2 mb-4">Faturas On-line</h1>
                
                <div> <span></span> <span></span> </div>
                <p className="text-2xl">Baiira Sao damaso, q-74, casa-25</p>
                <p className="text-2xl">Contatos:84 990 34 03</p>
                <p className="text-2xl">Nuit:258845485</p>
                
                <h1 className="text-center text-3xl mt-3 font-bold">{cliente.nome} {cliente.apelido}</h1>
                <h1 className="text-center text-3xl mt-4 ">Faturas nao Pagas</h1>
               
                {faturas.map((fatura:any)=>(
                    <div key={fatura._id }>
                        <div className="text-center"></div>
                        <h2 className="text-center text-2xl font-bold">{fatura.mes}</h2>
                        <div> <p className="text-2xl font-bold">Leitura:--------------------- {fatura.leitura}m3</p> </div>
                        <div> <p className="text-2xl font-bold">Consumo:------------------- {fatura.consumo}m3</p> </div>
                        
                        <div> <p className="text-2xl font-semibold">Estado: -------------- {fatura.estado}</p> </div>
                        <div> <p className="text-3xl font-bold mt-2">Valor: ----------- {fatura.valor} mt</p> </div>

                        <div className="text-center">**********************************************</div>

                       
                    </div>
                  ))}

            </div>
        </>
    )
}