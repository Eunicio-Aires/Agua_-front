import { CiSettings } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
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
          <div>
          
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Gestao de Faturas</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

    {/* <SearchInput/> */}
    {/* <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
  </div>
</div>

       <div className="flex">
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
                            <RxPerson size={13 } />
                        </div>
                    </Link>
                    <Link href='/configuracoes'>
                        <div className="bg-gray-100 hover:bg-gray-200 text-black my-4 p-3 rounded-lg inline-block"  >
                            <CiSettings size={13 } />
                        </div>
                    </Link>

                </div>
                
            </div>
            <main className="min-h-scren  h-full w-full p-5">
                
                {children}</main>
            </div>
            </div>
            
          </body> 
      </html>
    )
  }