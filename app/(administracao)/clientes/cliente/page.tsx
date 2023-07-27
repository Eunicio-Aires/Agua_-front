import { NextResponse } from "next/server";
interface fatura{
    mes:String;
    valor:Number;
    estado:String;
}
interface cliente{
  nome:String;
  apelido:String;
  codigo:String;
  faturas:fatura[];
  numeroDeContador:Number;
  telefone:Number;
}
interface ClienteProps{
  params:{
    cliente:String
  }
   
}
 


export default async function Page({ params }: { params: { cliente: string } }) {
  const posts = await fetch(`http://localhost:3101/clientex/${params.cliente}`).then((res) => res.json())
  return <div>My Post: {posts.nome}</div>
}  