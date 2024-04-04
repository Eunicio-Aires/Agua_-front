import { CiSettings } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx' 
import { BsGraphUpArrow } from "react-icons/bs"
import { cookies } from 'next/headers'
import Sidebar from '@/components/Sidebar'
import { Inter } from "next/font/google";
import { getCompan } from "@/lib/cookiesConf";
import NavBr from '@/components/NavBr'

import Link from "next/link"
import '../globals.css'
// import BarChart from "@/components/BarChart";

export default function RootLayout({ children,}: {children: React.ReactNode }) {
    
    return (
      <html lang="pt-br">
        <body  className={ ` flex items-start justify-between`}>

        <div className="hidden md:flex min-w-[250px]  min-h-screen p-3">

     {/* @ts-expect-error Server Component */}
        < Sidebar />
        </div>
          
            

         
                <main className="grid w-full h-full ">
                    <NavBr/>
                    {children}
                    </main>
             
          
            
          </body> 
      </html>
    )
  }