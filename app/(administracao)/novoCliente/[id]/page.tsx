// import { Registar } from '@/components/Registar'
export default async function UnicaZona({ params }: { params: { id: string } }){
     const posts = await fetch(`https://agua-p.vercel.app/adm/area/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
    return(
        <>
            <h1 className="text-center bold-400 text-xl mt-4 mb-3"> {posts.area.mes} </h1>
        <p>{posts.area.zona}</p>r

            {/* <Registar id={posts.area._id}/> */}
        </>
    )
}