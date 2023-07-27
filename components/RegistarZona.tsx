"use client"
import React, { useState } from "react";


export  function RegistarZona(){
    const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
    // This function is triggered when the button is clicked
    const buttonHandler = () => {
      setIsBlueBoxShown(!iseBlueBoxShown);
    };
    return(
  
    <div >
        <button onClick={buttonHandler}>
          {iseBlueBoxShown ? "Hide Blue Box" : "Show Blue Box"}
        </button>
        {iseBlueBoxShown && <div className="flex items-center justify-center p-12"><h1>ola Aires</h1></div>}
      </div>
    
 )
}