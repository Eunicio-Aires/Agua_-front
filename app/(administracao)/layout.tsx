import { CiSettings } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx' 
import { BsGraphUpArrow } from "react-icons/bs"
import { cookies } from 'next/headers'
import Sidebar from '@/components/Sidebar'
import { Inter } from "next/font/google";
import { getCompan } from "@/lib/cookiesConf";

import Link from "next/link"
import '../globals.css'
// import BarChart from "@/components/BarChart";

export default function RootLayout({ children,}: {children: React.ReactNode }) {
    const comp  =  getCompan()
    return (
      <html lang="pt-br">
        <body  className={ ` flex items-start justify-between`}>

        <div className="hidden md:flex min-w-[280px] border-r min-h-screen p-4">
        < Sidebar id={comp}/>
        </div>
          
            

          {/* <div className="flex">
            <div className="flexed w-14 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                    <div className="flex flex-col items-center fixed">
                        <Link href='/'>
                            <div className="bg-purple-800 text-white p-2 rounded-lg inline-block"  >
                              <RxSketchLogo size={13 }/>
                            </div>
                        </Link >
                        <span className="border-b-[1px] border-gray-200-w-full p-2"></span>
                        <Link href='/faturar'>
                            <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                                <RxDashboard size={13 } />
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                                <RxDashboard size={13} />
                            </div>
                        </Link>
                        <Link href='/pagaments'>
                            <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                                <GiPayMoney size={13 } />
                            </div>
                        </Link>
                        <Link href='/clientes'>
                            <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                                <RxPerson size={13 }/>
                            </div>
                        </Link>
                        <Link href='/configuracoes'>
                            <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                                <CiSettings size={13}/>
                            </div>
                        </Link>

                    </div>
                    
                </div> */}
                <main className="grid w-full h-full ">
                    {children}
                    </main>
             
          
            
          </body> 
      </html>
    )
  }