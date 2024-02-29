'use client'
export default function UserItems(){

    return <div className='flex items-center justify-between gap-2 border rounded-[16px] p-2'> 
        <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-400 text-white font-[700] flex items-center justify-center'>
            <p>EA</p>
        </div>
        <div>
            <p className=" text-[16px] font-bold">Eunicio</p>
            <p className="text-[12px] text-neutral-500">eunicioaires@gmail.com</p>
        </div>
    </div>
}