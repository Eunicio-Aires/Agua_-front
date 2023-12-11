import { RegistarZona } from "@/components/RegistarZona"; 
import { Cliente } from "@/components/Clientes";
import {GerarFatura} from '@/components/GerarFatura'
import Link from "next/link"
// type Zonas = {
//   _id: any;
//   zona: string;
// }

// type ZonasProps = {
//   zonas: Zonas[];
// }

export default async function Faturacao(){

    

  
    return(
       
       <div>
       

{/* @ts-expect-error Async Server Component */}
        <Cliente />
       </div>
    ) 
}