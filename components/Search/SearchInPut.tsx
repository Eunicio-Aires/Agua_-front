"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
export default function SearchInPut(){
    const [searchQuery, setsearchQuery] = useState("");
    const router = useRouter()


    const onSearch = (event: React.FormEvent) =>{
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/search?=${encodedSearchQuery}`)
    };
    return(
        <>
        <form className="flex justify-center w-2/3 " onSubmit={onSearch}>
        <input
        value={searchQuery}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-200 mt-3 mb-3 " />
        </form>
        
        </>
    )
}

