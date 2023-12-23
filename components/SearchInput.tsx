'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchInput(){
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const onSearch = (event : React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery)
        router.push(encodedSearchQuery)

        console.log("Ocorrendo o envento", encodedSearchQuery)
    }
    return(
        <div>
            <form onSubmit={onSearch}>
                <input 
                value= {searchQuery}
                onChange={(event) =>setSearchQuery(event.target.value)}
                type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            </form>
    
        
        </div>
    )
}