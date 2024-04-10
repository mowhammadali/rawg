import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "../color-mode-switch/ColorModeSwitch"

const Navbar = (): JSX.Element => {
    return (
        <HStack justifyContent="space-between" padding="8px 15px">
            <Image src="./assets/logo/logo.webp" boxSize="60px"/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar