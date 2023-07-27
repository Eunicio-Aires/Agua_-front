import SideBar from "@/components/Sidebar";
import Header from "@/components/Header";
import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx' 
import { BsGraphUpArrow } from "react-icons/bs"
import Link from "next/link"
import '../globals.css'
// import BarChart from "@/components/BarChart";

export default function RootLayout({
 
    children,
  }: {
    children: React.ReactNode 
  }) {
    return (
      <html lang="pt-br">
        <body>
       <div className="flex">
        <div className="flexed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='adminintra'>
                        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block"  >
                            <RxSketchLogo size={20 } />
                        </div>
                    </Link >
                    <span className="border-b-[1px] border-gray-200-w-full p-2"></span>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <RxDashboard size={20 } />
                        </div>
                    </Link>
                    <Link href='/'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <RxDashboard size={20 } />
                        </div>
                    </Link>
                    <Link href='/pagamentos'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <BsGraphUpArrow size={20 } />
                        </div>
                    </Link>
                    <Link href='/clientes'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <RxPerson size={20 } />
                        </div>
                    </Link>
                    <Link href='/admin/consumidores'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <RxPerson size={20 } />
                        </div>
                    </Link>

                </div>
                
            </div>
            <main className="bg-gray-100  min-h-scren  h-full w-full"><Header/>
                {children}</main>
            </div>
             
          </body> 
      </html>
    )
  }