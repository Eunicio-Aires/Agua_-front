import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { cookies } from 'next/headers'
import Image from 'next/image'
import qrcode from '../../../../public/hovercode.png';
import hands from '../../../../public/hands4903050-1280e16238370891651090x613removebgpreview-1@2x copy.png';

export default async function Imprimir({ params }:{ params:{id:any}}){
    // const cookieStore = await cookies()
   const todosCokies= await cookies().getAll()
    const posts = await fetch(`https://agua-p.vercel.app/adm/clientpr/${params.id}`,{cache:"no-cache"}).then((res) => res.json());
    const cliente = await posts.client;
    const faturas = await posts.faturasP
    // alert("operacional")
    return(
        <>
        <div className="">
        <div className="fixed mt-6 min-w-full">
          <Image className ="opacity-40 min-w-full"
          alt="hands"
         
          src={hands}
        //   sizes="100vw"
         
          style={{
            width: '100%',
            height: 'auto',
          }}
          />
          </div>

        <h1 className="text-center text-4xl mt-2 mb-4">Aguas da Matola</h1>
                
                {/* <div> <span></span> <span></span> </div> */}
                <p className="text-lg  text-center">Bairro Sao damaso, q-74, casa-25</p>
                <p className="text-lg text-center">258-849903403</p>
                <p className="text-lg text-center">Nuit:258845485</p>
                
                <h1 className="text-center text-2xl mt-5 font-bold">{cliente.nome} {cliente.apelido}</h1>
                <h1 className="text-center bold text-xl mt-4 ">Faturas nao pagas</h1>
        </div>
       



            <div className="p-2 m-4">
              

                
                
               
               
                {faturas.map((fatura:any)=>(
                    <div key={fatura._id } className=" m-3 border-black border-[1px] border-solid p-3">

                         <h2 className="text-center text-2xl font-bold mt-3">{fatura.mes}</h2>
                        <div className="flex justify-between"> <span>Leitura</span>    <span>{fatura.leitura}m3</span> </div>
                        <div className="flex justify-between"> <span>Consumo</span>    <span>{fatura.consumo}m3</span> </div>
                        <div className="flex justify-between"> <span>Valor</span>    <span>{fatura.valor}m3</span> </div>
                        
                        
                        {/* <div> <p className="text-2xl font-bold">Leitura:------------------- {fatura.leitura}m3</p> </div> */}
                        {/* <div> <p className="text-2xl font-bold">Consumo:------------------ {fatura.consumo}m3</p> </div> */}
                        
                        {/* <div> <p className="text-2xl font-semibold">Estado: ---------------- {fatura.estado}</p> </div>
                        <div> <p className="text-3xl font-bold mt-2">Valor: ----------- {fatura.valor} mt</p> </div>

                        <div className="text-center mt-3 font-bold">**********************************************</div> */}

                       
                    </div>
                  ))}
                    <p className="text-center mt-3" >Valor por m3 e de 75Mt</p>
            </div>

            <div className=" mt-6 flex justify-center">
          <Image className =" "
          alt="qr-code-agua"
         
          src={qrcode}
        //   sizes="100vw"
         
          style={{
            width: '200px',
            height: '200px',
          }}
          />
          </div>
        </>
    )
}