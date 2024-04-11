import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../game-card/GameCard';
import GameCardSkeleton from '../game-card-skeleton/GameCardSkeleton';

const GameGrid = (): JSX.Element => {
    const { games , error , isLoading } = useGames();
    const skeletons: number[] = [1 , 2 , 3 , 4 , 5 ,6 , 7 , 8 , 9 , 10];
        
    if (error) return <Text>{error}</Text>
   
    return (
        <SimpleGrid justifyContent={'space-between'} gap="30px" justifyItems={'center'} spacing={10} columns={{sm: 1 , md: 2 , lg: 3 , xl: 4}} padding={8}>
            {
                isLoading
                ?
                skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)
                :
                games.map(game => <GameCard key={game.id} game={game}/>)
            }
        </SimpleGrid>
    )
}

export default GameGrid;