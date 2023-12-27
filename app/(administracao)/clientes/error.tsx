'use client'

export default function error(error:any){
    return(
        <>

       
            <p>{error.error.message}</p>
        </>
    )
}