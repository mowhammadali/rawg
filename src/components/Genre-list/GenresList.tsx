import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import { getCroppedImageUrl } from "../../utils/image-url"

const GenresList = () => {
    const { data , isLoading , error } = useGenres()

    if (error) return null;
    
    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map((genre) => {
                return (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack gap="15px">
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="50px" borderRadius={8}/>
                            <Text fontSize="xl">{genre.name}</Text>
                        </HStack>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default GenresList
