import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../../hooks/useGames';

type PropsType = {
    game: Game
}

const GameCard = ({ game }: PropsType): JSX.Element => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;