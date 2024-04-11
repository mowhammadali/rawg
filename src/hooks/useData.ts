import { useEffect, useState } from "react";
import Request from "../services/api/api";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

interface Output<T> {
    data: T[];
    error: string;
    isLoading: boolean;
}

const useData = <T>(endpoint: string): Output<T> => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const callApi = async () => {
            setIsLoading(true);
            try {
                const response: FetchResponse<T> = await Request.getData(endpoint)
                setData(response.results);
                setIsLoading(false);
            } 
            catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        callApi();
    }, [])

    return {data , error , isLoading};
}

export default useData