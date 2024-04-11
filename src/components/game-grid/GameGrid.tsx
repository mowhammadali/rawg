import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import Request from '../../services/api/games';

interface Game {
    name: string;
    id: number;
}

interface fetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games , setGames] = useState<Game[]>([]);
    const [error , setError] = useState<string>('');

    const callApi = async () => {
        try {
            const response: fetchGamesResponse = await Request.getGames();
            setGames(response.results);
        }
        catch (error: any) {
            setError(error.message)
        }
    }

    useEffect(() => {
        callApi();
    } , [])

    if (error) return <Text>{error}</Text>

    return (
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    )
}

export default GameGrid;