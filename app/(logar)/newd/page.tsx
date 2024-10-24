// import { WorkLog } from '@/components/WorkLog'
import Image from "next/image";
import { RiBillLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

import { IoPersonOutline } from "react-icons/io5";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

export default  function Newd() {
    return(
        <div className="h-full ">
      {/* Nav */}
      <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <CiMenuFries className="text-white text-2xl"  />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          {/* <a className="btn btn-ghost text-xl">Fatura Na Mao</a> */}
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> */}
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
            <IoPersonOutline  className="text-white text-2xl"/>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

{/* end of the Nav */}
        
      <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-500 pt-10 rounded-b-xl">
        <h5 className="text-white font-thin font-sans ml-8">bem vindo,</h5>
      <h2 className="text-2xl text-white ml-8 font-semibold font-sans "> Eunicio Jose Aires</h2>
      </div>

      <div className="mx-auto w-[90%] h-40 bg-white mt-[-70px] shadow-md rounded-md">
              
            <h3 className="text-center text-xl pt-4 font-sans">Aguas da Matola</h3>
            <div className="flex"><LiaMoneyBillWaveAltSolid className="text-4xl font-sans text-[#005C53] mt-4 ml-[18px] mr-[-10px]" /> <h1 className="text-2xl  mt-4 ml-5 font-bold text-[#005C53] font-sans">1900.00 MZN</h1></div>
            
            
            <div className="flex justify-between mt-2 p-3">
              <span className="flex text-xl font-semibold text-gray-600 p-1 font-sans">  Faturas <button className="btn btn-outline btn-error btn-xs ml-1"> 3</button></span>
              <CiMenuFries className="text-white" />
              <span className="flex"> <MdDone className="text-2xl font-sans"/> Estado</span>
            </div>
        </div>




        {/*  */}

       

        <div className="w-[90%] mx-auto shadow-md h-60 mt-16 bg-white rounded-lg pt-3 ">
        
          <h3 className="text-center font-thin text-2xl mb-3 text-[#005C53]">Janeiro</h3>

          <div className="rounded-md border  p-1 m-1 bg-slate-50">
          <div className="flex justify-between bg-slate-200 p-2 ml-1 mr-1 rounded-md">
            <span className="">Leitura   </span>
            <span className="">L.anterior </span>
            <span className="">Consumo </span>
            {/* <span className=""><h4 className="text-[#005C53] ">800.00 MZN</h4></span> */}
            </div>

            <div className="flex justify-between mt-1  pl-4 pr-4 rounded-md">
            <span className="text-[#005C53]">220 m³   </span>
            <span className="text-[#005C53]">210 m³ </span>
            <span className="text-red-700">10 m³</span>
            
            </div>
          </div>

          

              <div className="flex ">
                <span className="ml-2 mt-2"><h4 className="text-[#005C53] text-2xl">800.00 MZN</h4></span>
              </div>
              <div className="flex justify-end">
              <button className=" mr-2 btn btn-sm mt-3 font-thin ">Parcelar</button>
              <button className="btn btn-sm mt-3 font-thin btn-outline btn-success">Pagar</button>
              </div>
            

              
          {/* <div className="flex justify-between">
            12/11/2024
          </div> */}
        </div>


        {/* <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
</footer> */}
    </div>
    )
    
}