import React, { SyntheticEvent } from 'react';
import { useState } from "react";
import  { BiUserPlus } from "react-icons/bi";


interface Fatura {
    _id:String;
   
}

export  function Fatur({_id}:Fatura){

    return(
        <button className="btn btn-outline btn-success btn-wide">Success</button>
    )
}