export default async function RegisCliente({
    params,
}:{params:{registarc:string}}){
    const zonaUnic = await fetch(`http://localhost:3101/zonaSeleciona/${params.registarc}`,{cache:"no-cache"});
    const zonaSl =await zonaUnic.json();
    
    return (
    <>
    <p>Ola: {zonaSl.zonasl.zona}</p>
 
    
    </>)
}