import { MdPhotoSizeSelectLarge } from "react-icons/md";

export default async function Imprimir({ params }:{ params:{faturacao:any}}){
    const posts = await fetch(`https://agua-p.vercel.app/adm/fatura/${params.faturacao}`,{cache:"no-cache"}).then((res) => res.json());
    return(
        <>
            <div>
                <h1 className="text-center ">Faturas On-line</h1>
                <p>endereco</p>
                <p>contaatos</p>
                <p>**********************************************</p>
                <p>{posts.mes}</p>

            </div>
        </>
    )
}