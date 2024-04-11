import { HStack, Image, List, ListItem , Text } from "@chakra-ui/react"
import useGenres from "../../hooks/useGenres"
import { getCroppedImageUrl } from "../../utils/image-url"
import GenreSkeleton from "../genre-skeleton/GenreSkeleton"

const GenresList = () => {
    const { data , isLoading , error } = useGenres();
    const skeletons: number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14];

    if (error) return null;

    return (
        <List>
            {
                isLoading 
                ?
                skeletons.map(skeleton => (
                    <ListItem key={skeleton} paddingY="5px">
                        <GenreSkeleton/>
                    </ListItem>
                ))
                :
                data.map((genre) => {
                    return (
                        <ListItem key={genre.id} paddingY="5px">
                            <HStack gap="15px">
                                <Image src={getCroppedImageUrl(genre.image_background)} boxSize="50px" borderRadius={8}/>
                                <Text fontSize="xl">{genre.name}</Text>
                            </HStack>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default GenresList
