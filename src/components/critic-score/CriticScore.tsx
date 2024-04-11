import { Badge } from '@chakra-ui/react';

interface PropsType {
    score: number;
}

const CriticScore = ({ score }: PropsType): JSX.Element => {
    let color = score > 85 ? "green" : score > 75 ? 'yellow' : '';

    return (
        <Badge colorScheme={color} fontSize={'14px'} paddingX={2} borderRadius={'6px'}>
            {score}
        </Badge>
    )
}

export default CriticScore;