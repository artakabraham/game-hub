import { HStack, Image, Link } from "@chakra-ui/react"
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Link href='/game-hub/'>
                <Image objectFit='cover' alt="logo" src={logo} boxSize="60px" />
            </Link>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar