import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../game-card/GameCard';
import GameCardSkeleton from '../game-card-skeleton/GameCardSkeleton';
import GameCardContainer from '../game-card-container/GameCardContainer';
import { Genre } from '../../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props): JSX.Element => {
    const { data , error , isLoading } = useGames(selectedGenre);
    const skeletons: number[] = [1 , 2 , 3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 , 11 , 12];
        
    if (error) return <Text>{error}</Text>
   
    return (
        <SimpleGrid justifyContent={'space-between'} justifyItems={'center'} 
            spacing={3} columns={{sm: 1 , md: 2 , lg: 3 , xl: 4}} paddingX={4} paddingBottom={4}>
            {
                isLoading
                ?
                skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))
                :
                data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))
            }
        </SimpleGrid>
    )
}

export default GameGrid;