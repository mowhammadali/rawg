import { useEffect, useState } from "react"
import Request from "../services/api/games"

export interface Game {
    name: string;
    id: number;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

interface UseGameType {
    games: Game[];
    error: string;
}

const useGames = (): UseGameType => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const callApi = async () => {
            try {
                const response: FetchGamesResponse = await Request.getGames()
                setGames(response.results)
            } 
            catch (error: any) {
                setError(error.message)
            }
        }
        callApi();
    }, [])

    return {games , error};
}

export default useGames
