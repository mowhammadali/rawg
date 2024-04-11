import { Platform } from "../../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"

interface PropsType {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: PropsType): JSX.Element => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }

    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
            ))}
        </HStack>
    )
}

export default PlatformIconList
