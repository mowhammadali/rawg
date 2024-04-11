import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../game-card/GameCard';

const GameGrid = (): JSX.Element => {
    const { games , error } = useGames();

    if (error) return <Text>{error}</Text>

    return (
        <SimpleGrid spacing={10} columns={{sm: 1 , md: 2 , lg: 3 , xl: 5}} padding={8}>
            {games.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
    )
}

export default GameGrid;