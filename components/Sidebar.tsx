// import Link from "next/link"
// import React, { Children } from "react"
// import Header from "./Header" 

// // import BarChart from "./BarChart"
// import RecentOrders from "./RecentOrders"
// import Image from "next/image"
// import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx' 
// import { BsGraphUpArrow } from "react-icons/bs"
// export default function SideBar(props:any){
//     return( 
//         // <div className="flex">
//             <div className="flexed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
//                 <div className="flex flex-col items-center">
//                     <Link href='/'>
//                         <div className="bg-purple-800 text-white p-3 rounded-lg inline-block"  >
//                             <RxSketchLogo size={20 } />
//                         </div>
//                     </Link >
//                     <span className="border-b-[1px] border-gray-200-w-full p-2"></span>
//                     <Link href='/'>
//                         <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
//                             <RxDashboard size={20 } />
//                         </div>
//                     </Link>
//                     <Link href='/'>
//                         <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
//                             <RxDashboard size={20 } />
//                         </div>
//                     </Link>
//                     <Link href='/Pagamentos'>
//                         <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
//                             <BsGraphUpArrow size={20 } />
//                         </div>
//                     </Link>
//                     <Link href='/Clientes'>
//                         <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
//                             <RxPerson size={20 } />
//                         </div>
//                     </Link>
//                     <Link href='/admin/consumidores'>
//                         <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
//                             <RxPerson size={20 } />
//                         </div>
//                     </Link>

//                 </div>
//             </div>
            
//         // </div>
//     )
// }


'use client'
import { getCompan, getSession } from '@/lib/cookiesConf'
import UserItems from '@/components/UserItems'
import { getnome } from '@/lib/cookiesConf'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Link } from 'lucide-react'
  

export default function SideBar(id:any){
    
    return <div className=' fixed flex flex-col gap-3 w-[250px] min-w-[250px]  '>
        <div className='min-w-[250px]'> <UserItems/> </div>
        <div className="grow min-w-[250px]">

      
               
                  <p><Link href={`inicial/${id}`}>Clientes</Link></p> 
                   
                    
              

                <div ><Link href=''>Sair</Link> </div>
           
        {/* <Command>
            <CommandInput placeholder="Type a command or search..." />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
            <CommandItem >Procurar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
            <CommandItem></CommandItem>
            <CommandItem >tufdas </CommandItem>
            <CommandItem>Settings</CommandItem>
            </CommandGroup>
        </CommandList>
        </Command> */}

        </div>
        <div>Pagamentos</div>
        




    </div>
}