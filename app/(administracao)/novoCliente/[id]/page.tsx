import { Registar } from '@/components/Registar'
export default async function UnicaZona({ params }: { params: { id: string } }){
     const posts = await fetch(`https://agua-p.vercel.app/adm/area/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
    return(
        <>
        <p>{posts.area.zona}</p>

            <Registar id={posts.area.zona._id}/>
        </>
    )
}