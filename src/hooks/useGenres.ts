import { useEffect, useState } from "react";
import Request from "../services/api/api";

export interface Genre {
    name: string;
    id: number;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

interface UseGameType {
    genres: Genre[];
    error: string;
    isLoading: boolean;
}

const useGenres = (): UseGameType => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const callApi = async () => {
            setIsLoading(true);
            try {
                const response: FetchGenresResponse = await Request.getGenres()
                setGenres(response.results);
                setIsLoading(false);
            } 
            catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        callApi();
    }, [])

    return {genres , error , isLoading};
}

export default useGenres
