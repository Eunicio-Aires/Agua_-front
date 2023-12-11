export default async function getConsumidor(){
    const consumidor = await fetch('http://localhost:3101/listar')
    return  consumidor
        
}



// utils/baseUrl.js

export function getBaseUrl() {
    return process.env.NEXT_PUBLIC_BASE_URL || "";
  }
  