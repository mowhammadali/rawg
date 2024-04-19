import { Grid, GridItem , Show } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar';
import GameGrid from './components/game-grid/GameGrid';
import GenresList from './components/Genre-list/GenresList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

const App = (): JSX.Element => {
    const [selectedGenres , setSelectedGenres] = useState<Genre | null>(null);
    
    return (
        <Grid templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '240px 1fr'
            }}
        >
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={6}>
                    <GenresList onSelectGenre={(genre) => setSelectedGenres(genre)}/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenres}/>
            </GridItem>
        </Grid>
    )
}

export default App;