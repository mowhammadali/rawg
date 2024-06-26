import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../../hooks/useGames';
import PlatformIconList from '../platform-icon-list/PlatformIconList';
import CriticScore from '../critic-score/CriticScore';
import { getCroppedImageUrl } from '../../utils/image-url';

type PropsType = {
    game: Game
}

const GameCard = ({ game }: PropsType): JSX.Element => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard;