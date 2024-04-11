import { Grid, GridItem , Show } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar';
import GameGrid from './components/game-grid/GameGrid';
import GenresList from './components/Genre-list/GenresList';

const App = (): JSX.Element => {
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside">
                    <GenresList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App;