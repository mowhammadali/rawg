import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PropsType {
    children: ReactNode
}

const GameCardContainer = ({ children }: PropsType) => {
    return (
        <Box height="340px" width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer;