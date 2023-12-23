"use client"
import { useSearchParams } from "next/navigation";
import useSWR from 'swr';

const fetchClients = async (url: string) =>{
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error (' falha ao buscar o cliente')
    }

    return response.json()
}
export default function SearchPage(){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const search = useSearchParams();
    const searchQuery = search ?  search.get('q') : null;

    const encodedSearchQuery = encodeURI(searchQuery || "")
    const { data, isLoading } = useSWR(`${baseUrl}/api/procurarCliente?q=${encodedSearchQuery}`,
    fetchClients
    )
    console.log("trocando", encodedSearchQuery)
    return(
        <div>
            <h1>Page search</h1>
        </div>
    )
}