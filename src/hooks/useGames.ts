import { useEffect, useState } from "react";
import Request from "../services/api/games";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

interface UseGameType {
    games: Game[];
    error: string;
    isLoading: boolean;
}

const useGames = (): UseGameType => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const callApi = async () => {
            setIsLoading(true);
            try {
                const response: FetchGamesResponse = await Request.getGames()
                setGames(response.results);
                setIsLoading(false);
            } 
            catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        callApi();
    }, [])

    return {games , error , isLoading};
}

export default useGames
