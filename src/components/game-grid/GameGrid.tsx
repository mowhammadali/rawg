import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../game-card/GameCard';
import GameCardSkeleton from '../game-card-skeleton/GameCardSkeleton';
import GameCardContainer from '../game-card-container/GameCardContainer';

const GameGrid = (): JSX.Element => {
    const { games , error , isLoading } = useGames();
    const skeletons: number[] = [1 , 2 , 3 , 4 , 5 ,6 , 7 , 8];
        
    if (error) return <Text>{error}</Text>
   
    return (
        <SimpleGrid justifyContent={'space-between'} gap="30px" justifyItems={'center'} 
            spacing={10} columns={{sm: 1 , md: 2 , lg: 3 , xl: 4}} padding={8}>
            {
                isLoading
                ?
                skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))
                :
                games.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))
            }
        </SimpleGrid>
    )
}

export default GameGrid;