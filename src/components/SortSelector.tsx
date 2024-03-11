import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By Relevence:</MenuButton>
            <MenuList>
                <MenuItem>Relevence</MenuItem>
                <MenuItem>Date added</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector;