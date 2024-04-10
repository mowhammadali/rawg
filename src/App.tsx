import { Grid, GridItem , Show } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" bg="gold">
                    aside
                </GridItem>
            </Show>
            <GridItem area="main" bg="dodgerblue">
                main
            </GridItem>
        </Grid>
    )
}

export default App;