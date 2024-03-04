'use client'
import { getnome } from "@/lib/cookiesConf";
import { getapelido } from "@/lib/cookiesConf";
import { getemail } from "@/lib/cookiesConf"
export default function UserItems(){

    const nome = getnome();
    const apelido = getapelido();
    const email = getemail()

    return <div className='flex items-center justify-between gap-2 border rounded-[16px] p-2'> 
        <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-400 text-white font-[700] flex items-center justify-center'>
            <p>EA</p>
        </div>
        <div>
            <p className=" text-[16px] font-bold">{nome} {apelido}</p>
            <p className="text-[12px] text-neutral-500">{email}</p>
        </div>
    </div>
}