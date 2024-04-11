import { Grid, GridItem , Show } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar';
import GameGrid from './components/game-grid/GameGrid';

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
                    aside
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App;