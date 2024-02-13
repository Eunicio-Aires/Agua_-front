'use client'
import { useRouter } from "next/navigation";
import React,  { SyntheticEvent } from "react";
import { cookies } from 'next/headers'
import Link from "next/link";




export  function WorkLog(){
    // const router = useRouter();
    const cookieStore = cookies()
    const handleSubmi = async (event: SyntheticEvent) => {
      event.preventDefault();
      const data =  {
        email: (event.target as HTMLFormElement).email.value,
        password: (event.target as HTMLFormElement).password.value,
    
      };
      const JSONdata = await JSON.stringify(data);
      const endpoint = `https://agua-front.vercel.app/api/login`;
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSONdata,
      };
      
      const response = await fetch(endpoint, options);
        const result = await response.json(); 
        const token =await result.token
        const id =await result.id
      //   const idCanp = await result.id
    
      try{
        //    const cookieStore = cookies()
        // cookies().set('token', token)
        
      
     console.log(result)
      alert("submetido")
      // const id = await result._id
      // router.push(`pagamentos/${id}`)
      }catch(error){
        alert(`Verifique o seu Codigo, Codigo invalido`);
      }
  
    }

    return (
        <>

<div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
            <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Entrar</h1>
                <p className="text-gray-500 dark:text-gray-400">Navegacao segura </p>
            </div>
            <div className="m-7">
                <form onSubmit={handleSubmi}>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email </label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label  className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder=" Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Log</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>



<div className="fixed bottom-5 w-full text-center text-gray-400">
	Crafted with ♡ by <Link  href=""></Link> <p className="text-blue-500">E.Aires</p>
</div>
        
        </>
    )
}