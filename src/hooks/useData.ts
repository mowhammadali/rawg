import { useEffect, useState } from "react";
import Request from "../services/api/api";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

interface Output<T> {
    data: T[];
    error: string;
    isLoading: boolean;
}

const useData = <T>(endpoint: string , requestConfig?: AxiosRequestConfig | undefined , deps?: any[]): Output<T> => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const callApi = async () => {
            setIsLoading(true);
            try {
                const response: FetchResponse<T> = await Request.getData(endpoint , requestConfig)
                setData(response.results);
                setIsLoading(false);
            } 
            catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        callApi();
    }, deps ? [...deps] :[])

    return {data , error , isLoading};
}

export default useData