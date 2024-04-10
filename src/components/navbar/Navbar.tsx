import { HStack, Image, Text } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <HStack>
            <Image src="./assets/logo/logo.webp" boxSize="60px"/>
            <Text>Navbar</Text>
        </HStack>
    )
}

export default Navbar