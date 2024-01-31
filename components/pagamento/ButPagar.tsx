"use client"
import React, { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import Mpesa from '@/components/pagamento/Mpesa';
import Emola from '@/components/pagamento/Emola'

interface Fatura{
    _id:String;
    
}
export default function ButPagar({_id}:Fatura){
    const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
    // This function is triggered when the button is clicked
    const buttonHandler = () => {
      setIsBlueBoxShown(!iseBlueBoxShown);
    }

    return(
        <>
        <div className="transition ease-in-out delay-150 mb-3">
        <button onClick={buttonHandler}>
          {iseBlueBoxShown ? <button className="btn btn-circle btn-outline ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button > : <p  className="btn btn-outline btn-accent ml-2"> Pagar <GiReceiveMoney /></p>}
        </button>
        {iseBlueBoxShown && <div className=" p-6 " >
        <Mpesa _id={_id}/>
        <Emola/>
        
        </div>}
      </div>
        </>
    )
}