import { Card, Skeleton, Box } from "@chakra-ui/react";

const GenreSkeleton = () => {
    return (
        <Card width="100%" height="50px" paddingX="8px">
            <Box display="flex" alignItems="center" gap="15px" marginTop="5px">
                <Skeleton width="40px" height="40px" borderRadius="50%"></Skeleton>
                <Skeleton width="60%" height="20px"></Skeleton>
            </Box>
        </Card>
    )
}

export default GenreSkeleton
