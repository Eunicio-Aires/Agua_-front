

interface pageProps{
    params:{
        name:String;
    }
}
export default function Dim({ params }:pageProps){
 return (
    <div>
       <h1>Others names: {params.name}</h1>
    </div>
 )
}