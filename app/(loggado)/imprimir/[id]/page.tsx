import { MdPhotoSizeSelectLarge } from "react-icons/md";

export default async function Imprimir({ params }:{ params:{id:any}}){
    const posts = await fetch(`https://agua-p.vercel.app/adm/fatura/${params.id}`,{cache:"no-cache"}).then((res) => res.json());
    return(
        <>
            <div className="p-2">
                <h1 className="text-center text-6xl ">Faturas On-line</h1>
                
                <div> <span></span> <span></span> </div>
                <p>endereco</p>
                <p>contaatos</p>
                <p>**********************************************</p>
                <p>{posts.mes}</p>

            </div>
        </>
    )
}